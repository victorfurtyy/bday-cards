import { openModal, closeModal } from "./modal";

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';


function closeOpenModal() {
    const modal = document.querySelector('.modal#incoming');
    if (modal.classList.contains('open')) {
        closeModal('incoming');
        setTimeout(() => openModal('incoming'), 400);
    }
}
window.openModal = openModal;
window.closeOpenModal = closeOpenModal;