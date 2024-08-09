import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.photocard', {
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