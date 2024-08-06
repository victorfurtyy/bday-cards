import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';



const swiper = new Swiper('.swiper', {
    effect: 'flip',
    loop: true,
    on: {
        activeIndexChange: function () {
            if (this.activeIndex === 1) 
                disableHint();
        }
    }
});
window.swiper = swiper;


function disableHint() {
    swiper.el.classList.remove('hint');
}


// REMOVE
function toggleHint() {
    swiper.el.classList.toggle('hint');
}
window.toggleHint = toggleHint;