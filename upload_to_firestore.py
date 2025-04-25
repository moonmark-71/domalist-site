import json
import firebase_admin
from firebase_admin import credentials, firestore

# 1. Firebase 초기화
cred = credentials.Certificate("serviceAccount.json")  # 🔁 네 서비스 계정 키 파일명 확인
firebase_admin.initialize_app(cred)

db = firestore.client()

# 2. JSON 파일 불러오기
with open("domeggook_popular.json", "r", encoding="utf-8") as f:
    products = json.load(f)

# 3. Firestore에 업로드
collection_ref = db.collection("externalProducts")  # 저장할 컬렉션 이름

upload_count = 0

for product in products:
    # 슬래시(/) 등 경로에 오류를 줄 수 있는 문자 제거 또는 변환
    safe_id = product["title"].replace("/", "_").replace("#", "_").replace(".", "_")

    doc_ref = collection_ref.document(safe_id)
    doc_ref.set({
        "title": product["title"],
        "productUrl": product["productUrl"],
        "price": product["price"],
        "imageUrl": product.get("imageUrl", "")
    })

    upload_count += 1

print(f"✅ Firestore에 {upload_count}개 상품 업로드 완료!")
