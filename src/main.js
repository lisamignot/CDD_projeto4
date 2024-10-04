document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const curiosities = document.querySelectorAll('[data-curiosity-question]');
    
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('seasons__list--is-active');
            removeActiveButton();
            botao.target.classList.add('seasons__tabs__button--is-active')
        })
    }

    for (let i = 0; i < curiosities.length; i++) {
        curiosities[i].addEventListener('click', abreOuFechaResposta);
    
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'curiosities__questions__item--is-open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('seasons__tabs__button--is-active');
    }
}

function escondeAbas() {
    const tabsItens = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsItens.length; i++) {
        tabsItens[i].classList.remove('seasons__list--is-active');
    }
}