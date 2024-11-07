import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC6TvQp1l5XxCQZOZF-O56dI_-KjpQkOUQ",
  authDomain: "ejemploproyecto1-d6791.firebaseapp.com",
  projectId: "ejemploproyecto1-d6791",
  storageBucket: "ejemploproyecto1-d6791.firebasestorage.app",
  messagingSenderId: "404870942267",
  appId: "1:404870942267:web:9a9fa893c703a7c6f8161e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };