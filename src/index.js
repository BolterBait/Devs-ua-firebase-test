import { refs } from './js/refs';
// import { onButtonClick, onBackdropClick } from './js/entrance-modal';
// import { cleanerMarkup } from './js/createMarkUp';
// import { createIngridientsEl } from './js/createIngridientsEl';
// const cocktailService = new ApiCoctails();
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'



import './js/entrance-modal';
import './js/seachByAlph';
import './js/changeTheme';
import './js/api';
import './js/createIngridientsEl';
import './js/createMarkUp';
import './js/makeIngridientsArray';
import './js/modalInfoCard';
import './js/optionsNotify';
// import './js/firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",
    authDomain: "filmoteka-5bf07.firebaseapp.com",
    projectId: "filmoteka-5bf07",
    storageBucket: "filmoteka-5bf07.appspot.com",
    messagingSenderId: "626342412224",
    appId: "1:626342412224:web:b02b966cc92ff4eefbd225",
    measurementId: "G-X5BM5EZZVP"
  };

  // Ініціалізуємо бібліотеку 
  initializeApp(firebaseConfig)

//  Ініціалізуємо сервіс
  const db = getFirestore()

  // Посилання на колекцію
  const colWatchedRef = collection(db, 'watched');
  const colQueueRef = collection(db, 'queue');

  // Отримуємо колекцію
 getDocs(colWatchedRef)
  .then((snapshot) => {console.log(snapshot.docs)});








