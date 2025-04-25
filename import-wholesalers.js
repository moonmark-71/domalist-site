const admin = require("firebase-admin");
const wholesalers = require("./wholesalers.json");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

(async () => {
  const batchSize = 500;
  for (let i = 0; i < wholesalers.length; i += batchSize) {
    const batch = db.batch();
    wholesalers.slice(i, i + batchSize).forEach((w) => {
      const ref = db.collection("wholesalers").doc();
      batch.set(ref, w);
    });
    await batch.commit();
    console.log(`✅  ${Math.min(i + batchSize, wholesalers.length)}/${wholesalers.length} uploaded`);
  }
  console.log("🎉  All documents imported!");
  process.exit();
})();
