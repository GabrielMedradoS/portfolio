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

/*** mobile ***/
const navigation = document.querySelector(`.navigation`);
const mobileMenu = document.querySelector(`.mobile-menu`);
/* funçao para ativar o handleClick e aparacer a navbar mobile */
mobileMenu.addEventListener(`click`, function() {
    handleClick();
    navBarLinks();
})

/* funçao toggle do icone menu */
function handleClick() {
    navigation.classList.toggle(`active`)
}

/* funçao remover a barnav ao clicar nos links */
function navBarLinks() {
    const navigationLinks = document.querySelectorAll(`.navigation a`);
    
        for (const link of navigationLinks) {
            link.addEventListener('click', function() {
                navigation.classList.remove('active')
            })
        }
}