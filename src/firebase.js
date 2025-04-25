// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

// 🔐 이 부분은 JB가 Firebase에서 복사해온 프로젝트 설정 값으로 바꿔줘야 해!
const firebaseConfig = {
  apiKey: "AIzaSyBIyIKe8sE7UVlY3vHpC6TyxxFFkjTrCcs",
  authDomain: "domae-platform.firebaseapp.com",
  projectId: "domae-platform",
  storageBucket: "domae-platform.appspot.com",
  messagingSenderId: "111337340615",
  appId: "1:111337340615:web:5e3dc697b24861ab5e08e2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
