import firebase from "firebase/app";
import 'firebase/auth'; // 꺼내줘야 함

const firebaseConfig = {
    apiKey: "AIzaSyCxxDrtnnfd6S-cM6znKWYwAFKCx80GPyc",
    authDomain: "mument-f95b6.firebaseapp.com",
    projectId: "mument-f95b6",
    storageBucket: "mument-f95b6.appspot.com",
    messagingSenderId: "731283292507",
    appId: "1:731283292507:web:24603d502ca49552025a7e",
    measurementId: "G-94741KRWGY"
}

//Firebase 초기화
firebase.initializeApp(firebaseConfig);
//Firebase 의 auth 를 사용해야 하므로 auth export 해주기
export const auth = firebase.auth();