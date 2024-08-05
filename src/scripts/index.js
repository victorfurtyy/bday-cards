import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    effect: 'flip',
    loop: true,
});


function disableHint() {
    swiper.el.classList.toggle('hint');
}


swiper.on('slideChange', disableHint);