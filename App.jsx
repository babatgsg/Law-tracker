import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6K5mhkJXNSr_bunTXW9_OIuGfhfev_2s',
  authDomain: 'law-maker-a6a55.firebaseapp.com',
  projectId: 'law-maker-a6a55',
  storageBucket: 'law-maker-a6a55.firebasestorage.app',
  messagingSenderId: '689949115149',
  appId: '1:689949115149:web:50c76f09b2965c3ef12644'
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const firestore = firebase.firestore();
        // Example of API key validation and error handling.
        if (!firebaseConfig.apiKey) {
          throw new Error('API key is missing');
        }
        // Fetch data logic and retry logic goes here.
        // Example: Fetch quiz data from Firestore
        const quizData = await firestore.collection('quizzes').get();
        quizData.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      } catch (error) {
        console.error('Error fetching data:', error.message);
        alert(`Error: ${error.message}`); // Display user-friendly error message
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Law Tracker App</h1>
    </div>
  );
};

export default App;
