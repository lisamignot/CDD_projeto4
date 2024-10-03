document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
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
})

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