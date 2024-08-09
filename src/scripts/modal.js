export function openModal(modalId) {
    const modal = document.querySelector('.modal#'+modalId);
    modal.classList.add('open');
    modal.showModal();
}

export function closeModal(modalId) {
    const modal = document.querySelector('.modal#'+modalId);
    modal.classList.remove('open');

    const duration = Number(getComputedStyle(modal).getPropertyValue('--modal-transition').replace('s', ''))*1000
    setTimeout(() => modal.close(), duration);
}

export function toggleModal(modalId) {
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('open')) closeModal(modalId);
    else openModal(modalId);
}