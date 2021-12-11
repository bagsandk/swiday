// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAhp3ZFlcvLE-ClM9MkkmnNCAifGJeIco0',
    authDomain: 'swiwites.firebaseapp.com',
    projectId: 'swiwites',
    storageBucket: 'swiwites.appspot.com',
    messagingSenderId: '613824309366',
    appId: '1:613824309366:web:adbbc10978e6447c7f1757',
    measurementId: 'G-VEPT412SG3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
