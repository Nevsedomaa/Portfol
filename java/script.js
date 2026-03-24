document.addEventListener('DOMContentLoaded', () => {
    // Находим все карточки статистики
    const parallaxItems = document.querySelectorAll('.js-parallax-item');

    document.addEventListener('mousemove', (e) => {
        // Координаты центра экрана
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Отклонение мыши от центра
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Применяем сдвиг к каждой карточке индивидуально
        parallaxItems.forEach(item => {
            // Получаем скорость из data-атрибута HTML (чем меньше число, тем сильнее движение)
            const speed = item.getAttribute('data-speed') || 40;

            // Рассчитываем сдвиг
            const moveX = mouseX / speed;
            const moveY = mouseY / speed;

            // Применяем трансформацию
            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});