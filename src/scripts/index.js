import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';



const swiper = new Swiper('.swiper', {
    effect: 'flip',
    loop: true,
});


function disableHint() {
    swiper.el.classList.toggle('hint');
}


swiper.on('slideChange', disableHint);