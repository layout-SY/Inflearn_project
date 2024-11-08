// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApiKey = import.meta.env.VITE_FIREBASE_KEY;

const firebaseConfig = {
	apiKey: firebaseApiKey,
	authDomain: 'react-disnayplus-app.firebaseapp.com',
	projectId: 'react-disnayplus-app',
	storageBucket: 'react-disnayplus-app.firebasestorage.app',
	messagingSenderId: '241513689322',
	appId: '1:241513689322:web:ac31d18bada3a02b81e793',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
