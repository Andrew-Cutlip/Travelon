import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB_j6RJZzrwRKjRfKpUPJdW_raV0Fukb6w",
    authDomain: "travelon-76cd1.firebaseapp.com",
    projectId: "travelon-76cd1",
    storageBucket: "travelon-76cd1.appspot.com",
    messagingSenderId: "173994225051",
    appId: "1:173994225051:web:e6bbb2690f74ff13eb453e",
    measurementId: "G-SCZT9FPN3P"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;