var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var a=l[e];delete l[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},e.parcelRequired7c6=a);var i=a("krGWQ"),n=a("8sSZi");a("iWJ8d"),a("4TNnu");var o=a("1vg23");a("83ZX7");const s=new(0,n.default);let r=JSON.parse(localStorage.getItem("saveDataStorage"))||{queue:[],watched:[]};0!==r.watched.length?i.refs.watchedHederBtnEl.textContent=`watched  ${r.watched.length}`:0!==r.queue.length&&(i.refs.queueHederBtnEl.textContent=`queue ${r.queue.length}`),i.refs.filmList.addEventListener("click",(async function(e){if(console.log(window),e.preventDefault(),"A"!==e.target.parentNode.parentElement.nodeName)return;let t=e.target.parentNode.parentElement.id;s.filmId=t;const l=await s.fetchById(),a=await function(e){const{poster_path:t,original_title:l,title:a,vote_average:i,vote_count:n,genres:o,popularity:s,overview:r,id:d}=e,c=o.map((({name:e})=>e)).join(", ");return`<div class="modal-film-image-wrap"><img class="modal-film-image" src="https://image.tmdb.org/t/p/original${t}\n    " alt="${a}" width="375" height="478">\n    </div>\n    <div class="modal-film-info-wrap">\n    <h2 class="modal-film-title">${a}</h2>\n    <div class="modal-film-info-list">\n    <ul class="modal-film-properties-list">\n      <li class="modal-film-properties-item">Vote/Votes</li>\n      <li class="modal-film-properties-item">Popularity</li>\n      <li class="modal-film-properties-item">Original Title</li>\n      <li class="modal-film-properties-item">Genre</li>\n    </ul>\n    <ul class="modal-film-value-list">\n      <li class="modal-film-value-item"><span class="modal-film-vote-average">${i}</span>/<span class="modal-film-vote-count">${n}</span></li>\n      <li class="modal-film-value-item">${s}</li>\n      <li class="modal-film-value-item">${l.toUpperCase()}</li>\n      <li class="modal-film-value-item">${c}</li>\n    </ul>\n    </div>\n    <h3 class="modal-film-about-title">ABOUT</h3>\n    <p class="modal-film-about-text">${r}</p>\n    <ul class="modal-film-button-list">\n      <li class="modal-film-button-item"><button id="${d}" class="modal-film-button" type="button" data-action='watched'>ADD TO WATCHED</button></li>\n      <li class="modal-film-button-item"><button id="${d}" class="modal-film-button" type="button" data-action='queue'>ADD TO QUEUE</button></li>\n    </ul> </div>`}(l.data);(0,o.cleanerMarkup)(i.refs.modalFilmWrap),function(e){i.refs.modalFilmWrap.insertAdjacentHTML("beforeend",e)}(a),i.refs.backdropEl.classList.remove("visually-hidden"),d=l.data,console.log(d)})),i.refs.closeBtnEl.addEventListener("click",(function(){i.refs.backdropEl.classList.add("visually-hidden"),(0,o.cleanerMarkup)(i.refs.modalFilmWrap)})),i.refs.modalFilmWrap.addEventListener("click",(function(e){if(console.log(d),"BUTTON"!==e.target.nodeName)return;if("watched"===e.target.dataset.action){let e=d;r.watched.push(e),0!==r.watched.length&&(i.refs.watchedHederBtnEl.textContent=`watched  ${r.watched.length}`),localStorage.setItem("saveDataStorage",JSON.stringify(r))}if("queue"===e.target.dataset.action){let e=d;r.queue.push(e),0!==r.watched.length&&(i.refs.queueHederBtnEl.textContent=`queue ${r.queue.length}`),localStorage.setItem("saveDataStorage",JSON.stringify(r))}})),i.refs.watchedHederBtnEl.addEventListener("click",(function(){(0,o.cleanerMarkup)(i.refs.filmList)})),i.refs.queueHederBtnEl.addEventListener("click",(function(){(0,o.cleanerMarkup)(i.refs.filmList)}));let d={};
//# sourceMappingURL=films.4b76509b.js.map
