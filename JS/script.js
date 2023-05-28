let div1 = document.querySelectorAll('div.dentro-border-img-3-true-remastered-lis-2-972')[0], div2 = document.querySelectorAll('div.dentro-border-img-3-true-remastered-lis-2-972')[1], div3 = document.querySelectorAll('div.dentro-border-img-3-true-remastered-lis-2-972')[2]
let divConsoles1 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[0], divConsoles2 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[1], divConsoles3 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[2], divConsoles4 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[3], divConsoles5 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[4], divConsoles6 = document.getElementsByClassName('img-item-6-1-a-6-forma-console-fonte-187')[5]
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

function border() {
    div1.setAttribute('id', 'meuId');
    div2.removeAttribute('id', 'meuId');
    div3.removeAttribute('id', 'meuId');
    showDiv.setAttribute('class', 'show__div-exposed')
    divOculta.removeAttribute('id', 'Ocult')
    linkButton()
}

function border1() {
    border()
    div2.setAttribute('id', 'meuId');
    div1.removeAttribute('id', 'meuId');
    divOculta.removeAttribute('id', 'Ocult')
    linkButton()
}

function border2() {
    if (div1.id == 'meuId' || div2.id == 'meuId') {
        border()
        div3.setAttribute('id', 'meuId');
        div1.removeAttribute('id', 'meuId');
        divOculta.setAttribute('id', 'Ocult')
        linkButton()
    } else {
        border()
        div3.setAttribute('id', 'meuId');
        div1.removeAttribute('id', 'meuId');
        divOculta.setAttribute('id', 'Ocult2')
        linkButton()
    }
}

function borderOff() {
    border()
    div1.removeAttribute('id', 'meuId');
    showDiv.removeAttribute('class', 'show__div-exposed')
    borderOffConsole()
}

div1.addEventListener('click', border)
div2.addEventListener('click', border1)
div3.addEventListener('click', border2)

div1.addEventListener('dblclick', borderOff)
div2.addEventListener('dblclick', borderOff)
div3.addEventListener('dblclick', borderOff)

function borderDivConsoles0() {
    divConsoles1.setAttribute('id', 'meuId');
    divConsoles2.removeAttribute('id', 'meuId');
    divConsoles3.removeAttribute('id', 'meuId');
    divConsoles4.removeAttribute('id', 'meuId');
    divConsoles5.removeAttribute('id', 'meuId');
    divConsoles6.removeAttribute('id', 'meuId');
    comprarGame.setAttribute('class', 'comprar__game');
}

function linkButton() {
    if (div1.id == 'meuId' && divConsoles1.id == 'meuId' || div1.id == 'meuId' && divConsoles2.id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-PPSA02046_00-1336949547454056'
    } else if (div1.id == 'meuId' && divConsoles3.id == 'meuId' || div1.id == 'meuId' && divConsoles4.id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/pt-BR/games/store/life-is-strange-true-colors/9NFWSNN4JWKB'
    } else if (div1.id == 'meuId' && divConsoles5.id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/936790/Life_is_Strange_True_Colors/'
    } else if (div1.id == 'meuId' && divConsoles6.id == 'meuId') {
        comprarGame.href = 'https://stadia.google.com/game/life-is-strange-true-colors-pre-order'
    } else if (div2.id == 'meuId' && divConsoles1.id == 'meuId' || div2.id == 'meuId' && divConsoles2.id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-CUSA23980_00-1951785847228082'
    } else if (div2.id == 'meuId' && divConsoles3.id == 'meuId' || div2.id == 'meuId' && divConsoles4.id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/en-US/games/store/life-is-strange-remastered/9MVRDVNCKTRJ'
    } else if (div2.id == 'meuId' && divConsoles5.id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/'
    } else if (div2.id == 'meuId' && divConsoles6.id == 'meuId') {
        comprarGame.href = 'https://stadia.google.com/game/life-is-strange-remastered'
    } else if (div3.id == 'meuId' && divConsoles1.id == 'meuId' || div3.id == 'meuId' && divConsoles2.id == 'meuId') {
        comprarGame.href = 'https://store.playstation.com/pt-br/product/UP0082-CUSA08283_00-PROM0000COMPLLAT'
    } else if (div3.id == 'meuId' && divConsoles3.id == 'meuId' || div3.id == 'meuId' && divConsoles4.id == 'meuId') {
        comprarGame.href = 'https://www.xbox.com/pt-BR/games/store/life-is-strange-2-temporada-completa/BSW8GKBVB5W8'
    } else if (div3.id == 'meuId' && divConsoles5.id == 'meuId') {
        comprarGame.href = 'https://store.steampowered.com/app/532210/Life_is_Strange_2/'
    } else {
        comprarGame.href = '#'
        comprarGame.removeAttribute('class', 'comprar__game')
    }
}

function borderDivConsoles() {
    borderDivConsoles0()
    linkButton()
}

function borderDivConsoles1() {
    borderDivConsoles0()
    divConsoles2.setAttribute('id', 'meuId');
    divConsoles1.removeAttribute('id', 'meuId');
    linkButton()
}

function borderDivConsoles2() {
    borderDivConsoles0()
    divConsoles3.setAttribute('id', 'meuId');
    divConsoles1.removeAttribute('id', 'meuId');
    linkButton()
}

function borderDivConsoles3() {
    borderDivConsoles0()
    divConsoles4.setAttribute('id', 'meuId');
    divConsoles1.removeAttribute('id', 'meuId');
    linkButton()
}

function borderDivConsoles4() {
    borderDivConsoles0()
    divConsoles5.setAttribute('id', 'meuId');
    divConsoles1.removeAttribute('id', 'meuId');
    linkButton()
}

function borderDivConsoles5() {
    borderDivConsoles0()
    divConsoles6.setAttribute('id', 'meuId');
    divConsoles1.removeAttribute('id', 'meuId');
    linkButton()
}

function borderOffConsole() {
    borderDivConsoles0()
    divConsoles1.removeAttribute('id', 'meuId');
    comprarGame.removeAttribute('class', 'comprar__game')
}

divConsoles1.addEventListener('click', borderDivConsoles)
divConsoles2.addEventListener('click', borderDivConsoles1)
divConsoles3.addEventListener('click', borderDivConsoles2)
divConsoles4.addEventListener('click', borderDivConsoles3)
divConsoles5.addEventListener('click', borderDivConsoles4)
divConsoles6.addEventListener('click', borderDivConsoles5)

divConsoles1.addEventListener('dblclick', borderOffConsole)
divConsoles2.addEventListener('dblclick', borderOffConsole)
divConsoles3.addEventListener('dblclick', borderOffConsole)
divConsoles4.addEventListener('dblclick', borderOffConsole)
divConsoles5.addEventListener('dblclick', borderOffConsole)
divConsoles6.addEventListener('dblclick', borderOffConsole)

const reserveJaButton = function() {
    scrollTo(0, 2450)
}

scrollButton.addEventListener('click', () => scrollTo(0, 615));
reserveJa.addEventListener('click', reserveJaButton)
reserveJa1.addEventListener('click', reserveJaButton)

containerSlide.style.display = 'none'

function loop() {
    for(let i = 0; i <= arrayImagens.length -1; i++) {
        containerItems.innerHTML += `<img class="img-all" src="${arrayImagens[i]}" alt=""></img>`
    }
}

function zoomExpand(valor) {
    midiaScreenshots.setAttribute('class', 'div-div-selecao-imagens-4-midia-screenshots-07211')
    containerSlide.style.display = 'flex'
    midiaScreenshots.style.display = 'none'
    containerAll.style.padding = '20px'
    loop()

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

function zoomExpandCarrosel() {
    containerSlide.style.position = 'fixed'
    containerSlide.style.left = 'center'
    containerSlide.style.top = '0'
    containerSlide.style.zIndex = '1000'
    containerSlide.style.width = '100vw'
    containerSlide.style.height = '100vh'
    containerSlide.style.backgroundColor = 'white'
}

expandCarrosel.addEventListener('click', zoomExpandCarrosel)
