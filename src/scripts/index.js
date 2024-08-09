import { toggleHint } from "./photocard";

if (process.env.NODE_ENV === 'development') document.title = 'B-DAY Photo | DEV';


function splashAnimation() {
    const background = document.querySelector('.aurora-background');
    background.classList.toggle('single-background');

    const duration = Number(getComputedStyle(background).getPropertyValue('--splash-animation').replace('s', ''))*1000
    
    setTimeout(toggleHint, duration);
}
window.splashAnimation = splashAnimation;