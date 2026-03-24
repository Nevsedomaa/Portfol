document.addEventListener('DOMContentLoaded', () => {
    const heroBtns = document.getElementById('hero-btns');

    document.addEventListener('mousemove', (e) => {
        const moveX = (window.innerWidth / 2 - e.pageX) / 50;
        const moveY = (window.innerHeight / 2 - e.pageY) / 50;

        if (heroBtns) {
            heroBtns.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});