import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6K5mhkJXNSr_bunTXW9_OIuGfhfev_2s",
  authDomain: "law-maker-a6a55.firebaseapp.com",
  projectId: "law-maker-a6a55",
  storageBucket: "law-maker-a6a55.appspot.com",
  messagingSenderId: "689949115149",
  appId: "1:689949115149:web:50c76f09b2965c3ef12644",
  measurementId: "G-DK7NBE0WG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Gemini API key
const geminiApiKey = "AIzaSyDLL0xTFbMRUMKsCwC-ud5JI6Ldix53pug";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Law Tracker</h1>
    </div>
  );
}

export default App;
