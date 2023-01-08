import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBF62ptZlUXRXcjxJ_m755xQtbFGYj9mm4',
  authDomain: 'simple-blog-site-66ba0.firebaseapp.com',
  projectId: 'simple-blog-site-66ba0',
  storageBucket: 'simple-blog-site-66ba0.appspot.com',
  messagingSenderId: '891355423274',
  appId: '1:891355423274:web:6cd81a61e3a5bc78331953',
};

firebase.initializeApp(firebaseConfig);

const projectFirestor = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestor, timestamp, projectAuth };
