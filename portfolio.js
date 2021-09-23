/* evento que dispara ao scrollar o site */
window.addEventListener(`scroll`, function() {
    backToTop();
})
/* Funçao para aparecer o icone arrowup */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 200) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}