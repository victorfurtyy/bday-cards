import { toggleHint } from "./photocard";
import { openModal, closeModal, shakeModal } from "./modal";
import { USERS } from "./users";

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';


function validateUser(username) {
    username = username.replace('@', '');
    
    if (USERS[username]) {
        const user = USERS[username];
        const img = document.querySelector('.photocard .front');
        const desc = document.querySelector('.photocard .alt-text');

        img.style.backgroundImage = `url(./img/users/${user.img})`;
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


document.addEventListener('DOMContentLoaded', () => {
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