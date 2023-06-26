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
const closeSlide = document.getElementById('close');
const buttonMenuMobile = document.getElementsByClassName('menu-opcoes-3-riscos-092')[0];
const menuMobile = document.getElementsByClassName('div-logo-lista-conjunto-087')[0];
const divPartMenuMobile = document.getElementsByClassName('div-part-menu-mobile');
const textMaxEChloe = document.getElementsByClassName('max-e-chloe-div-retornar-arcadia-bay-001')[0];
const textReturnArcadiaBay = document.getElementsByClassName('return-bay-div-farol-bay-002')[0];

function border(valor) {
    for(let i = 0; i < div.length; i++) {
        div[i].removeAttribute('id', 'meuId');
    }

    switch(valor) {
        case 0:
            div[0].setAttribute('id', 'meuId');
            divOculta.removeAttribute('id', 'Ocult')
            break;
        case 1:
            div[1].setAttribute('id', 'meuId');
            divOculta.removeAttribute('id', 'Ocult')
            break;
        case 2: 
            div[2].setAttribute('id', 'meuId');
            divOculta.setAttribute('id', 'Ocult')
            break;
    }

    showDiv.setAttribute('class', 'show__div-exposed')

    if(valor === -1) {
        showDiv.removeAttribute('class', 'show__div-exposed')
    }
    
    linkButton();
}

function borderOff(offBorder) {
    border(offBorder)
    borderOffConsole()
}

for(let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', () => border(i))
    div[i].addEventListener('dblclick', () => borderOff(-1))
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
    for(let i = 0; i < divConsoles.length; i++) {
        divConsoles[i].removeAttribute('id', 'meuId');
    }
    
    divConsoles[valor].setAttribute('id', 'meuId');
    comprarGame.setAttribute('class', 'comprar__game');
    linkButton();
}

function borderOffConsole() {
    borderDivConsoles()
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

function loopArray() {
    containerItems.innerHTML = ''; 

    for(let i = 0; i <= arrayImagens.length -1; i++) {
        containerItems.innerHTML += `<img class="img-all" src="${arrayImagens[i]}" alt=""></img>`
    }
}

function zoomExpand(valor) {
    midiaScreenshots.setAttribute('class', 'div-div-selecao-imagens-4-midia-screenshots-07211');
    containerSlide.style.display = 'flex';
    midiaScreenshots.style.display = 'none';
    containerAll.style.padding = '20px';
    loopArray();

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

containerSlide.style.display = 'none';
expandCarrosel.style.marginRight = '50px'

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
        expandCarrosel.addEventListener('click', () => closeCarrossel(false))
    })
}

closeSlide.addEventListener('click', closeCarrossel);

function closeCarrossel(closeSeparador = true) {
    containerSlide.setAttribute('style', '');
    expandCarrosel.setAttribute('src', 'SVG/expand.svg');
    document.body.style.overflowY = 'scroll';
    fullScreenCarrossel();

    if(closeSeparador) {
        containerSlide.style.display = 'none'
        midiaScreenshots.style.display = 'inline-flex'
        containerAll.style.padding = '0px'
    }
}

abrirFecharMenuMobile(true);
function abrirFecharMenuMobile(valor) {
    if(valor) {
        buttonMenuMobile.addEventListener('click', () => {
            menuMobile.setAttribute('id', 'div-logo-lista-conjunto-087--return');
            abrirFecharMenuMobile(false);
        });
    } else {
        buttonMenuMobile.addEventListener('click', removerMenu);
        menuMobile.addEventListener('click', removerMenu);
        document.body.style.overflowY = 'hidden';

        for(let i = 0; i < divPartMenuMobile.length; i++) {
            divPartMenuMobile[i].addEventListener('click', removerMenu);
        }
    }
}

function removerMenu() {
    menuMobile.removeAttribute('id', 'div-logo-lista-conjunto-087--return');
    abrirFecharMenuMobile(true);
    document.body.style.overflowY = 'scroll';
}

scrollText();
function scrollText(translateValue = 60) {
    textMaxEChloe.style.transform = `translateX(-${translateValue}vw)`;
    textReturnArcadiaBay.style.transform = `translateX(${translateValue}vw)`;

    document.addEventListener('scroll', () => {
        if(window.scrollY === 0) {
            translateValue = 60;
            textMaxEChloe.style.transform = `translateX(-${translateValue}vw)`;
            textReturnArcadiaBay.style.transform = `translateX(${translateValue}vw)`;
        }

        if(translateValue <= 0) {
            return
        }
    
        if(window.innerWidth <= 959) {
            translateValue -= 3;
        } else {
            translateValue -= 2.5;
        }

        textMaxEChloe.style.transform = `translateX(-${translateValue}vw)`;
        textReturnArcadiaBay.style.transform = `translateX(${translateValue}vw)`;
    })
}

const idiomaSelecao = document.querySelectorAll('.select-idioma-footer-008');
const idiomas = ['portugues', 'espanol', 'deutsch', 'italianoIT', 'françaisFR', 'englishNL', 'englishUK', 'englishUS'];

setInterval(() => mudarIdioma(), 1000);
let controleValueUm = false;

function mudarIdioma() {
    const menuItems = document.getElementsByClassName('item-li-cabecalho');
    let arrayMenuItems = [];
    const headerMenuItems = document.getElementsByClassName('li-header-cima-078');
    let arrayHeaderMenuItems = [];
    const buttonAssistaTrailer = document.getElementsByClassName('button-assita-trailer-p-017')[0];
    const exploreButton = document.getElementsByClassName('explore-p-ex-037')[0];
    const informativo = document.getElementsByClassName('informativo-div-020')[0];
    const reserveJaText = document.querySelector('.div-button-reserve-ja-collection-true-remastered-012>p');
    const textMaxECholeES = document.getElementsByClassName('info-max-e-chloe-jogos-premiados-007')[0];
    const titleRetorneArcadiaBay = document.getElementsByClassName('h3-return-bay-050')[0];
    const textReturnArcadiaBayES = document.getElementsByClassName('info-return-bay-cidadezinha-019')[0];
    const midiaText = document.getElementsByClassName('item-midia-sozinha-midia-070')[0];
    const screenshotsText = document.getElementsByClassName('name-item-screenshot-video-2-032')[0];
    const videosText = document.getElementsByClassName('name-item-screenshot-video-2-032')[1];
    const reserveJaTextDown = document.getElementsByClassName('reserve-ja-3-text-030')[0];
    const mudarRegiaoText = document.getElementsByClassName('mudar-regiao-3-item-text-303')[0];
    const escolherJogoText = document.getElementsByClassName('selecione-jogo-text-item-3-050')[0];
    const escolherPlataforma = document.getElementsByClassName('text-selecionar-plataforma-sua-item-title-551')[0];
    const footerParagrafo = document.getElementsByClassName('footer-paragrafo-001')[0];
    const footerItemsText = document.getElementsByClassName('lista-footer-029');
    let arrayfooterItemsText = [];

    if(idiomaSelecao[0].value === '1' && controleValueUm) {
        document.location.reload();
        controleValueUm = false;
        
    } else if(idiomaSelecao[0].value === '2') {
        arrayMenuItems = ['arte', 'juego', 'comunidad', 'blog', 'bienes'];
        arrayHeaderMenuItems = ['juegos destacados', 'noticias', 'loja', 'soporte'];
        arrayfooterItemsText = ['aviso de cookies', 'terminos de uso', 'aviso de privacidad', 'centro de apoyo', 'política de uso de materiales', 'declaración de afiliado'];
        [buttonAssistaTrailer.innerHTML, exploreButton.innerHTML, informativo.innerHTML, reserveJaText.innerHTML, textMaxECholeES.innerHTML, titleRetorneArcadiaBay.innerHTML, textReturnArcadiaBayES.innerHTML, midiaText.innerHTML, screenshotsText.innerHTML, videosText.innerHTML, reserveJaTextDown.innerHTML, mudarRegiaoText.innerHTML, escolherJogoText.innerHTML, escolherPlataforma.innerHTML, comprarGame.innerHTML, footerParagrafo.innerHTML] = ['ver el trailer', 'explorar', 'informativo', 'reservar ahora', "¡Regresa a Arcadia Bay y experimenta dos juegos galardonados de Life is Strange como nunca antes! Las imágenes y la animación remasterizadas dan nueva vida a un gran elenco de personajes e historias emocionantes. La colección Life is Strange Remastered incluye 'Life is Strange Remastered' y 'Life is Strange: Before the Storm Remastered'.", 'volver a la bahía de Arcadia', "Iluminado por su emblemático faro, este pequeño pueblo de la costa de Oregón tiene una historia llena de misterios: la desaparición de Rachel Amber, la corrupción del gobierno, secretos familiares, un enorme incendio forestal y una tormenta sobrenatural. Como Max y Chloe, tus elecciones darán forma al pasado, presente y futuro de Arcadia Bay.", 'medios de comunicación', 'capturas de pantalla', 'vídeos', 'reservar ahora', 'cambia región', 'selecciona tu juego', 'selecciona tu plataforma', 'compra', 'LA VIDA ES EXTRAÑA © 2015, 2021 Square Enix Limited. LA VIDA ES EXTRAÑA: ANTES DE LA TORMENTA © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: ANTES DE LA TORMENTA LIFE IS STRANGE, LIFE IS STRANGE: ANTES DE LA TORMENTA, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX y el logotipo de SQUARE ENIX son marcas registradas o marcas comerciales del grupo de empresas Square Enix . Nintendo Switch es una marca comercial de Nintendo. DECK NINE y DECK NINE GAMES son marcas registradas de Idol Minds, LLC. DONTNOD y DONTNOD Entertainment son marcas registradas de DONTNOD Entertainment, S.A. Todas las demás marcas comerciales son propiedad de sus respectivos dueños.'];

        for(let i in menuItems) {
            menuItems[i].innerHTML = arrayMenuItems[i];
        }

        for(let i in headerMenuItems) {
            headerMenuItems[i].innerHTML = arrayHeaderMenuItems[i];
        }

        for(let i in footerItemsText) {
            footerItemsText[i].innerHTML = arrayfooterItemsText[i];
        }
        
        controleValueUm = true;
    }
}