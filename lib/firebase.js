import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDtBq428iAKgUl60a-kF_O2dj9d-RHjBDM",
	authDomain: "joblistingapp-24357.firebaseapp.com",
	projectId: "joblistingapp-24357",
	storageBucket: "joblistingapp-24357.firebasestorage.app",
	messagingSenderId: "351031313280",
	appId: "1:351031313280:web:8b2d198c680ec7f5c87765",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
