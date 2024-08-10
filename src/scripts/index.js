import { toggleHint } from "./photocard";
import { openModal, closeModal, shakeModal } from "./modal";
import { USERS } from "./users";

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';


function validateUser(username) {
    username = username.replace('@', '');
    username = username.toLowerCase();
    username = username.trim();
    
    if (USERS[username]) {
        const user = USERS[username];
        const img = document.querySelector('.photocard .front');
        const desc = document.querySelector('.photocard .alt-text');

        img.style.backgroundImage = `url(${user.img})`;
        desc.innerText = user.desc;

        return true;
    }

    return false;
}


function splashAnimation() {
    const background = document.querySelector('.aurora-background');
    background.classList.toggle('single-background');

    const duration = Number(getComputedStyle(background).getPropertyValue('--splash-animation').replace('s', ''))*1000
    
    setTimeout(toggleHint, duration);
}


function openCloseModal() {
    const modal = document.querySelector('.modal#incoming');
    if (modal.classList.contains('open')) {
        closeModal('incoming');
        setTimeout(() => {
            openModal('incoming');
        }, 400);
    }
}

function openCloseModal() {
    const modal = document.querySelector('.modal#incoming');
    if (modal.classList.contains('open')) {
        closeModal('incoming');
        setTimeout(() => {
            openModal('incoming');
        }, 400);
    }
}

const inDevelopment = true;
document.addEventListener('DOMContentLoaded', () => {
    if (inDevelopment) {
        openModal('incoming', {
            buttons: [
                {
                    text: 'Aguarde',
                    callback: () => {
                        openCloseModal();
                    }
                }
            ]
        });

        document.querySelector('#dev-background').style.display = 'block';
        document.querySelector('.aurora-background').classList.remove('single-background');
        document.querySelector('.photocard').style.display = 'none';
        return;
    }

    const modalOptions = {
        buttons: [
            {
                text: "Enviar",
                callback: () => {
                    const input = document.querySelector('#indentifier');

                    if (validateUser(input.value)) {
                        splashAnimation();
                        closeModal('identify');
                        return;
                    }
                    shakeModal();
                }
            }
        ]
    }
    openModal('identify', modalOptions);
});