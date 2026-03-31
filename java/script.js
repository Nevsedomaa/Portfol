document.addEventListener('DOMContentLoaded', () => {
    const parallaxItems = document.querySelectorAll('.js-parallax-item');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        parallaxItems.forEach(item => {
            const speed = item.getAttribute('data-speed') || 40;
            const moveX = mouseX / speed;
            const moveY = mouseY / speed;

            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
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