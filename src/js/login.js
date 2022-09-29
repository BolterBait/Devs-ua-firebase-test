import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence } from "firebase/auth";
import { doc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",
  authDomain: "filmoteka-5bf07.firebaseapp.com",
  projectId: "filmoteka-5bf07",
  storageBucket: "filmoteka-5bf07.appspot.com",
  messagingSenderId: "626342412224",
  appId: "1:626342412224:web:b02b966cc92ff4eefbd225",
  measurementId: "G-X5BM5EZZVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log(auth)


const formEl = document.querySelector('.signup')
const mail = document.querySelector('#email')
const pass = document.querySelector('#pass')
const loginEl = document.querySelector('.login-btn')

formEl.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()
  const userName = mail.value;
  const userPass = pass.value;
  createNewAccount(auth, userName, userPass)
  formEl.reset()
}

function createNewAccount(auth, email, password) {
  const userCredentials = createUserWithEmailAndPassword(auth, email, password)
}
// Log-in users
loginEl.addEventListener('click', onLoginPageSubmit);

function onLoginPageSubmit(e) {
  e.preventDefault();
  const userEmail = mail.value;
  const userPassword = pass.value;
  loginIntoAccount(auth, userEmail, userPassword);
  formRef.reset();
}

function loginIntoAccount(auth, email, password) {
    auth = getAuth(firebaseConfig);
    setPersistence(auth, browserLocalPersistence);
    signInWithEmailAndPassword(auth, email, password);
    
}