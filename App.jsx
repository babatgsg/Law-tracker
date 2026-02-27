import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import axios from 'axios';

// Firebase configuration
a const firebaseConfig = {
    apiKey: "AIzaSyC6K5mhkJXNSr_bunTXW9_OIuGfhfev_2s",
    authDomain: "law-maker-a6a55.firebaseapp.com",
    projectId: "law-maker-a6a55",
    storageBucket: "law-maker-a6a55.firebasestorage.app",
    messagingSenderId: "689949115149",
    appId: "1:689949115149:web:50c76f09b2965c3ef12644"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.example.com/data'); // Replace with actual API endpoint
            setData(response.data);
        } catch (err) {
            setError('Failed to fetch data. Please try again later.');
            console.error(err);
            retryFetch(); // Retry logic
        }
    };

    const retryFetch = async (retryCount = 3) => {
        for (let i = 0; i < retryCount; i++) {
            try {
                const response = await axios.get('https://api.example.com/data');
                setData(response.data);
                return;
            } catch (err) {
                console.error(`Retry ${i + 1}:`, err);
                if (i === retryCount - 1) {
                    setError('Multiple attempts to fetch data failed.');
                }
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Law Tracker</h1>
            {error && <p className="error">{error}</p>}
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li> // Adjust based on actual data structure
                ))}
            </ul>
        </div>
    );
};

export default App;