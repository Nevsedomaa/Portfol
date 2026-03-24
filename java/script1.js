// java/script1.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    function showCards(filter) {
        cards.forEach((card, index) => {
            const category = card.dataset.category;

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.classList.remove('reveal');

                setTimeout(() => {
                    card.classList.add('reveal');
                }, index * 70);
            } else {
                card.classList.add('hidden');
                card.classList.remove('reveal');
            }
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            showCards(button.dataset.filter);
        });
    });

    showCards('all');
});