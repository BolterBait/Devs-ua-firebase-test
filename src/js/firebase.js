import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore, collection, getDocs, addDoc, doc, setDoc,
} from 'firebase/firestore/lite'
import { refs } from './refs';
import { filmArray } from './modal-filmoteka';

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//  Ініціалізуємо сервіс
const db = getFirestore(app)

  // Посилання на колекцію
  const colWatchedRef = collection(db, 'watched');
  const colQueueRef = collection(db, 'queue');

  // Отримуємо колекції
  getDocs(colQueueRef)
  .then((snapshot) => {
    let queue = [];
    snapshot.docs.forEach((doc) => {
    queue.push({...doc.data(), id: doc.id})
    })    
    console.log(queue)})
    .catch(err => {console.log(err.message)});
  

  getDocs(colWatchedRef)
  .then((snapshot) => {
    let watched = [];
    snapshot.docs.forEach((doc) => {
      watched.push({...doc.data(), id: doc.id})
    })
    console.log(watched)})
    .catch(err => {console.log(err.message)});

// Додовання в колекцію з автоID
const addWatchedFilm = document.querySelector('.modal-film-wrap');
addWatchedFilm.addEventListener('click', (e) => {
  e.preventDefault()
console.log(e.target.id);
  addDoc(colWatchedRef, {
    id: e.target.id,
    poster_path: filmArray.poster_path,
    original_title: filmArray.original_title,
    genres: Object.values(filmArray.genres),
    release_date: `${new Date(filmArray.release_date).getFullYear()}`,
  }).then(() => {
    // refs.watchedHederBtnEl.classList.add('active');
    // refs.watchedHederBtnEl.textContent = 'Remove';
    })
})


//     Add a new document in collection "watched"
// setDoc(doc(db, "watched", "77777"), {
//   original_title: "Los Angeles",
//   adult: false,
//   overview: "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets"
// });

  // setDoc(doc(db, 'watched', 'new-film-id'),addWatchedFilm.title.value );  

  // async function getBooks(db) {
  //   const booksCol = collection(db, 'books');
  //   const booksSnapshot = await getDocs(booksCol);
  //   const booksList = booksSnapshot.docs.map(doc => doc.data());
  //   console.log(booksList);
  //   return booksList;
  // }

// Додовання в колекцію з автоID
// const addWatchedFilm = document.querySelector('.modal-film-wrap');
// addWatchedFilm.addEventListener('click', (e) => {
//   e.preventDefault()
//   addDoc(collection, {
//     id: addWatchedFilm.title.value,
//     adult: addWatchedFilm.author.value,
//   }).then(() => {
//     addWatchedFilm.reset()
//   })
// })
