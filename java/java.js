document.addEventListener('DOMContentLoaded', () => {
    const heroBtns = document.getElementById('hero-btns');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    document.addEventListener('mousemove', (e) => {
        const moveX = (window.innerWidth / 2 - e.pageX) / 50;
        const moveY = (window.innerHeight / 2 - e.pageY) / 50;

        if (heroBtns) {
            heroBtns.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});