import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';


function openModal(modalId) {
    const modal = document.querySelector('.modal#'+modalId);
    modal.classList.add('open');
    modal.showModal();
}
window.openModal = openModal;

function closeModal(modalId) {
    const modal = document.querySelector('.modal#'+modalId);
    modal.classList.remove('open');

    const duration = Number(getComputedStyle(modal).getPropertyValue('--modal-transition').replace('s', ''))*1000
    setTimeout(() => modal.close(), duration);
}
window.closeModal = closeModal;

function toggleModal(modalId) {
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('open')) closeModal(modalId);
    else openModal(modalId);
}
window.toggleModal = toggleModal;



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