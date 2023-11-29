document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.region-card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    });
});
