// Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDvvgeZrKqfYN3EvH9nw1WbYXjAGWe9pvI",
  authDomain: "cr7-trivia-eaf2e.firebaseapp.com",
  projectId: "cr7-trivia-eaf2e",
  storageBucket: "cr7-trivia-eaf2e.firebasestorage.app",
  messagingSenderId: "1011360870078",
  appId: "1:1011360870078:web:62b42f563d078df7a838ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore database
const db = firebase.firestore();