var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t),t("1wH5c");var o=t("krGWQ"),a=t("7rYDH"),i=t("1vg23"),f=t("eWCmQ"),l=t("4Wlk7");i=t("1vg23");const s=new(0,a.default);o.refs.formEl.addEventListener("submit",(async function(e){if(e.preventDefault(),s.name=e.currentTarget.elements.query.value.toLowerCase().trim(),!s.name)return void f.Notify.info("You need to enter something Bro",l.optionsNotify);try{const{data:e}=await s.fetchByName(),r=e.drinks;(0,i.cleanerMarkup)(o.refs.menu_container),(0,i.baseMarkUpCreate)(r,o.refs.menu_container)}catch(e){console.error(e),(0,i.cleanerMarkup)(o.refs.menu_container)}e.target.reset()})),t("j9q0j"),t("1vg23"),t("8azwo"),t("7rYDH"),t("4Wlk7");
//# sourceMappingURL=searchByName.c5fca6f8.js.map