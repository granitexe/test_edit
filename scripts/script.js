// Dynamic content loading
document.addEventListener('DOMContentLoaded', () => {
    // Sample interactive element
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
