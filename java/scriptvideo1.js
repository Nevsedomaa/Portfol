document.addEventListener('DOMContentLoaded', () => {
    const compareRange = document.getElementById('compareRange');
    const beforeLayer = document.getElementById('beforeLayer');
    const compareLine = document.getElementById('compareLine');
    const compareHandle = document.getElementById('compareHandle');

    function updateCompare(value) {
        if (beforeLayer) beforeLayer.style.width = `${value}%`;
        if (compareLine) compareLine.style.left = `${value}%`;
        if (compareHandle) compareHandle.style.left = `${value}%`;
    }

    if (compareRange && beforeLayer && compareLine && compareHandle) {
        updateCompare(compareRange.value);

        compareRange.addEventListener('input', (e) => {
            updateCompare(e.target.value);
        });
    }

    const revealItems = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');

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