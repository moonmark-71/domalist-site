const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json"); // 이미 있음

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

(async () => {
  const snap = await db.collection("wholesalers").get();
  const batch = db.batch();
  snap.docs.forEach(d => {
    if (!d.data().views) {
      batch.update(d.ref, { views: 0 });
    }
  });
  await batch.commit();
  console.log("✅ views 필드 0으로 일괄 추가 완료!");
  process.exit();
})();
