export function openModal(modalId, options) {
    const modal = document.querySelector('.modal#'+modalId);

    if (options) {
        const buttons = options.buttons;
        
        var modalButtons = null;
        try {
            var modalButtons = modal.querySelector('.modal-footer');
        } catch (e) {}
        
        if (!modalButtons) {
            const footer = document.createElement('footer');
            footer.classList.add('modal-footer');
            modal.appendChild(footer);
            modalButtons = footer;
        }
        modalButtons.innerHTML = '';

        buttons.forEach(button => {
            const modalButton = document.createElement('button');
            modalButton.innerText = button.text;
            modalButton.onclick = button.callback;
            modalButtons.appendChild(modalButton);
        });
    }

    modal.classList.add('open');
    modal.showModal();
}

export function closeModal(modalId) {
    const modal = document.querySelector('.modal#'+modalId);
    modal.classList.remove('open');

    const duration = Number(getComputedStyle(modal).getPropertyValue('--modal-transition').replace('s', ''))*1000
    setTimeout(() => modal.close(), duration);
}


function toggleModal(modalId) {
    const modal = document.querySelector('.modal');
    if (modal.classList.contains('open')) closeModal(modalId);
    else openModal(modalId);
}





export function shakeModal() {
    const modal = document.querySelector('.modal.open');

    modal.classList.add('shake');
    setTimeout(() => modal.classList.remove('shake'), 500);
}
