import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd

# Firebase 인증
cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 엑셀 불러오기
df = pd.read_excel("도매업체정보.xlsx")
df = df.dropna(subset=["name"])
df["name"] = df["name"].astype(str).str.strip()  # name 공백 제거

upload_names = set(df["name"].tolist())

# Firestore 기존 문서 불러오기
existing_docs = db.collection("wholesalers").stream()
existing_map = {str(doc.to_dict().get("name")).strip(): doc.id for doc in existing_docs}

# Firestore에서 삭제할 문서
deleted = 0
for name, doc_id in existing_map.items():
    if name not in upload_names:
        db.collection("wholesalers").document(doc_id).delete()
        deleted += 1

# Firestore에 추가/업데이트
added, updated = 0, 0
for _, row in df.iterrows():
    name = row["name"].strip()
    data = {
        "name": name,
        "category": row.get("category", ""),
        "summary": row.get("summary", ""),
        "siteUrl": row.get("siteUrl", "") if pd.notna(row.get("siteUrl")) and str(row.get("siteUrl")).strip() else "",
        "logoUrl": row.get("logoUrl", "/images/default-logo.png") if pd.notna(row.get("logoUrl")) and str(row.get("logoUrl")).strip() else "/images/default-logo.png",
        "views": 0
    }

    if name in existing_map:
        db.collection("wholesalers").document(existing_map[name]).set(data)
        updated += 1
    else:
        db.collection("wholesalers").document().set(data)
        added += 1

print(f"✅ Firestore 동기화 완료\n🆕 신규 추가: {added}\n🔄 업데이트: {updated}\n🗑 삭제: {deleted}")
