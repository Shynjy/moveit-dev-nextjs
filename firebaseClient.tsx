import firebase from 'firebase';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAqftBhLYGPo3agckCRNi3zQk1wt7nLMY0",
    authDomain: "moveit-dev-nextjs.firebaseapp.com",
    projectId: "moveit-dev-nextjs",
    storageBucket: "moveit-dev-nextjs.appspot.com",
    messagingSenderId: "597801598651",
    appId: "1:597801598651:web:9664f01c76e6428950b39e"
}

export default function FirebaseClient() {
    if(!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}