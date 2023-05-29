let div = document.querySelectorAll('div.dentro-border-img-3-true-remastered-lis-2-972')
let divConsoles = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')
let showDiv = document.getElementById('show-div')
let scrollButton = document.getElementsByClassName('div-conjunto-2-div-seta-explore-juntos-072')[0]
let reserveJa = document.getElementsByClassName('div-button-reserve-ja-collection-true-remastered-012')[0]
let reserveJa1 = document.getElementsByClassName('div-button-reserve-ja-collection-true-remastered-012')[1]
let comprarGame = document.getElementById('comprar-game')
let divOculta = document.getElementsByClassName('div-div-6-div-console-selecionar-all-conjunto-maior-058')[5]
let explore = document.getElementsByClassName('div-conjunto-2-div-seta-explore-juntos-072')[0]
let arrayImagens = ['imagens/LIS-Midia-04.png', 'imagens/LIS-Midia-01.png', 'imagens/LIS-Midia-02.png', 'imagens/LIS-Midia-03.png']
let midiaScreenshots = document.getElementById('midia-screenshots')
let containerSlide = document.getElementById('container-slide')
let containerItems = document.getElementById('container-items')
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let primeiraImagem = document.getElementsByClassName('img-all')
let expand = document.getElementsByClassName('svg-expand__script')
let expandCarrosel = document.getElementById('expand-carrosel')
let containerAll = document.getElementById('container-all')
let imageBg = document.getElementsByClassName('selecao-imagens-4-midia-screenshots-010')

function border(valor) {
    div[0].setAttribute('id', 'meuId');
    div[1].removeAttribute('id', 'meuId');
    div[2].removeAttribute('id', 'meuId');
    showDiv.setAttribute('class', 'show__div-exposed')
    divOculta.removeAttribute('id', 'Ocult')
    linkButton()

    switch(valor) {
        case 1:
            border()
            div[1].setAttribute('id', 'meuId');
            div[0].removeAttribute('id', 'meuId');
            divOculta.removeAttribute('id', 'Ocult')
            linkButton()
            break;
        case 2: 
            if (div[0].id == 'meuId' || div[1].id == 'meuId') {
                border()
                div[2].setAttribute('id', 'meuId');
                div[0].removeAttribute('id', 'meuId');
                divOculta.setAttribute('id', 'Ocult')
                linkButton()
            } else {
                border()
                div[2].setAttribute('id', 'meuId');
                div[0].removeAttribute('id', 'meuId');
                divOculta.setAttribute('id', 'Ocult2')
                linkButton()
            }
            break;
    }
}

function borderOff() {
    border()
    div[0].removeAttribute('id', 'meuId');
    showDiv.removeAttribute('class', 'show__div-exposed')
    borderOffConsole()
}

for(let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', () => border(i))
    div[i].addEventListener('dblclick', borderOff)
}

function linkButton() {
    if (div[0].id == 'meuId' && divConsoles[0].id == 'meuId' || div[0].id == 'meuId' && divConsoles[1].id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-PPSA02046_00-1336949547454056'
    } else if (div[0].id == 'meuId' && divConsoles[2].id == 'meuId' || div[0].id == 'meuId' && divConsoles[3].id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/pt-BR/games/store/life-is-strange-true-colors/9NFWSNN4JWKB'
    } else if (div[0].id == 'meuId' && divConsoles[4].id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/936790/Life_is_Strange_True_Colors/'
    } else if (div[0].id == 'meuId' && divConsoles[5].id == 'meuId') {
        comprarGame.href = 'https://stadia.google.com/game/life-is-strange-true-colors-pre-order'
    } else if (div[1].id == 'meuId' && divConsoles[0].id == 'meuId' || div[1].id == 'meuId' && divConsoles[1].id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-CUSA23980_00-1951785847228082'
    } else if (div[1].id == 'meuId' && divConsoles[2].id == 'meuId' || div[1].id == 'meuId' && divConsoles[3].id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/en-US/games/store/life-is-strange-remastered/9MVRDVNCKTRJ'
    } else if (div[1].id == 'meuId' && divConsoles[4].id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/'
    } else if (div[1].id == 'meuId' && divConsoles[5].id == 'meuId') {
        comprarGame.href = 'https://stadia.google.com/game/life-is-strange-remastered'
    } else if (div[2].id == 'meuId' && divConsoles[0].id == 'meuId' || div[2].id == 'meuId' && divConsoles[1].id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-CUSA08283_00-PROM0000COMPLLAT'
    } else if (div[2].id == 'meuId' && divConsoles[2].id == 'meuId' || div[2].id == 'meuId' && divConsoles[3].id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/pt-BR/games/store/life-is-strange-2-temporada-completa/BSW8GKBVB5W8'
    } else if (div[2].id == 'meuId' && divConsoles[4].id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/532210/Life_is_Strange_2/'
    } else {
        comprarGame.href = '#'
        comprarGame.removeAttribute('class', 'comprar__game')
    }
}

function borderDivConsoles(valor) {
    divConsoles[0].setAttribute('id', 'meuId');

    for(let i = 1; i < divConsoles.length; i++) {
        divConsoles[i].removeAttribute('id', 'meuId');
    }

    switch(valor) {
        case 1:
            divConsoles[1].setAttribute('id', 'meuId');
            divConsoles[0].removeAttribute('id', 'meuId');
            break;
        case 2: 
            divConsoles[2].setAttribute('id', 'meuId');
            divConsoles[0].removeAttribute('id', 'meuId');
            break;
        case 3:
            divConsoles[3].setAttribute('id', 'meuId');
            divConsoles[0].removeAttribute('id', 'meuId');
            break;
        case 4:
            divConsoles[4].setAttribute('id', 'meuId');
            divConsoles[0].removeAttribute('id', 'meuId');
            break;
        case 5:
            divConsoles[5].setAttribute('id', 'meuId');
            divConsoles[0].removeAttribute('id', 'meuId');
            break;
    }

    comprarGame.setAttribute('class', 'comprar__game');
    linkButton();
}

function borderOffConsole() {
    borderDivConsoles()
    divConsoles[0].removeAttribute('id', 'meuId');
    comprarGame.removeAttribute('class', 'comprar__game')
}

for(let i = 0; i < divConsoles.length; i++) {
    divConsoles[i].addEventListener('dblclick', borderOffConsole);
    divConsoles[i].addEventListener('click', () => borderDivConsoles(i));
}

const reserveJaButton = function() {
    scrollTo(0, 2450)
}

scrollButton.addEventListener('click', () => scrollTo(0, 615));
reserveJa.addEventListener('click', reserveJaButton)
reserveJa1.addEventListener('click', reserveJaButton)

containerSlide.style.display = 'none'

function loopArray() {
    for(let i = 0; i <= arrayImagens.length -1; i++) {
        containerItems.innerHTML += `<img class="img-all" src="${arrayImagens[i]}" alt=""></img>`
    }
}

function zoomExpand(valor) {
    midiaScreenshots.setAttribute('class', 'div-div-selecao-imagens-4-midia-screenshots-07211')
    containerSlide.style.display = 'flex'
    midiaScreenshots.style.display = 'none'
    containerAll.style.padding = '20px'
    loopArray()

    for(let i = 1; i <= valor; i++) {
        nextImage();
    } 
}

for(let i = 0; i < imageBg.length; i++) {
    expand[i].addEventListener('click', () => zoomExpand(i))
    imageBg[i].addEventListener('click', () => zoomExpand(i))
}

const nextImage = () => containerItems.appendChild(primeiraImagem[0]);

next.addEventListener('click', nextImage);
previous.addEventListener('click', () => {
    let itemsTamanho = primeiraImagem[primeiraImagem.length -1]
    containerItems.insertBefore(itemsTamanho, primeiraImagem[0])
});

fullScreenCarrossel();
function fullScreenCarrossel() {
    expandCarrosel.addEventListener('click', () => {
        containerSlide.style.position = 'fixed';
        containerSlide.style.left = 'center';
        containerSlide.style.top = '50%';
        containerSlide.style.translate = '0 -50%';
        containerSlide.style.zIndex = '1000';
        containerSlide.style.width = '95vw';
        containerSlide.style.height = '95vh';
        containerSlide.style.backgroundColor = 'white';
        document.body.style.overflowY = 'hidden';
        expandCarrosel.setAttribute('src', 'SVG/compress.svg');
        expandCarrosel.style.marginRight = '50px'
        expandCarrosel.addEventListener('click', () => {
            containerSlide.setAttribute('style', '');
            expandCarrosel.setAttribute('src', 'SVG/expand.svg');
            document.body.style.overflowY = 'scroll';
            expandCarrosel.style.marginRight = '0px'
            fullScreenCarrossel();
        })
    })
}