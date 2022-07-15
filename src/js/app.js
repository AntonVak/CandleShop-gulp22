import * as flsFunctions from "./modules/functions.js"
import {test} from "./index.js"
import validation from "./contactform.js"

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();

//Меню бургер==============================================================================
const burgerMenu = document.querySelector('.burger-menu');
if(burgerMenu) {
    const menuBody = document.querySelector('.menu');
    burgerMenu.addEventListener("click",function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

test();
