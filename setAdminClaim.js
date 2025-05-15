// 파일명: setAdminClaim.js
const admin = require("firebase-admin");

// 🔐 서비스 계정 키 JSON 파일 경로 (수정 필요)
const serviceAccount = require("./domae-platform-firebase-adminsdk-fbsvc-4608db0959.json");

// 🔧 Firebase Admin 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ✅ 여기에 관리자 UID 입력
const uid = "OjLaHqHogPWOA53xT87xDq481hA3"; // moonmark71@gmail.com의 UID

// 🔐 관리자 권한 부여
admin
  .auth()
  .setCustomUserClaims(uid, { role: "admin" })
  .then(() => {
    console.log("✅ 관리자 권한 부여 완료!");
  })
  .catch((error) => {
    console.error("❌ 관리자 권한 설정 실패:", error);
  });
