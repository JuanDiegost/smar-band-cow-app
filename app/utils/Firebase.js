import firebase from 'firebase';

const settings = {
    timestampsInSnapshots: true
};

const config = {
    apiKey: "AIzaSyB4HklirSSdHkX8WD1jicXTt_RLEeZRux8",
    authDomain: "smart-band-fdf82.firebaseapp.com",
    databaseURL: "https://smart-band-fdf82.firebaseio.com",
    projectId: "smart-band-fdf82",
    storageBucket: "smart-band-fdf82.appspot.com",
    messagingSenderId: "867245481717",
    appId: "1:867245481717:web:9479515be3ab3073d1afbc"
};

export const firebaseApp = firebase.initializeApp(config);