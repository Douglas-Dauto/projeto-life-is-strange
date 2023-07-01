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
const topoScroll = document.getElementById('topo-scroll');

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
    border(offBorder);
    borderOffConsole();
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
    
    if(valor !== -2) {
        divConsoles[valor].setAttribute('id', 'meuId');
    }
    
    comprarGame.setAttribute('class', 'comprar__game');
    linkButton();
}

function borderOffConsole() {
    borderDivConsoles(-2);
    comprarGame.removeAttribute('class', 'comprar__game');
    linkButton();
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
        if(window.scrollY >= 600) {
            topoScroll.setAttribute('class', 'topo-scroll topo-scroll--aparecer');
        }

        if(window.scrollY === 0) {
            translateValue = 60;
            textMaxEChloe.style.transform = `translateX(-${translateValue}vw)`;
            textReturnArcadiaBay.style.transform = `translateX(${translateValue}vw)`;
            topoScroll.setAttribute('class', 'topo-scroll');
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
idiomaSelecao[0].value = localStorage.getItem('idioma');
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
    let arrayMenuItemsValueUm, arrayMenuItemsValueDois, arrayMenuItemsValueTres, arrayMenuItemsValueQuatro, arrayMenuItemsValueCinco;
    let arrayHeaderMenuItemsValueUm, arrayHeaderMenuItemsValueDois, arrayHeaderMenuItemsValueTres, arrayHeaderMenuItemsValueQuatro;
    let arrayfooterItemsTextValueUm, arrayfooterItemsTextValueDois, arrayfooterItemsTextValueTres, arrayfooterItemsTextValueQuatro, arrayfooterItemsTextValueCinco, arrayfooterItemsTextValueSeis;
    let buttonAssistaTrailerValue, exploreButtonValue, informativoValue, reserveJaTextValue, textMaxECholeValue, titleRetorneArcadiaBayValue, textReturnArcadiaBayValue, midiaTextValue, screenshotsTextValue, videosTextValue, reserveJaTextDownValue, mudarRegiaoTextValue, escolherJogoTextValue, escolherPlataformaValue, comprarGameValue, footerParagrafoValue;


    function traduzirArrayMenuItems(arrayMenuItemsValueUmPmtr, arrayMenuItemsValueDoisPmtr, arrayMenuItemsValueTresPmtr, arrayMenuItemsValueQuatroPmtr, arrayMenuItemsValueCincoPmtr) {
        arrayMenuItemsValueUm = arrayMenuItemsValueUmPmtr;
        arrayMenuItemsValueDois = arrayMenuItemsValueDoisPmtr;
        arrayMenuItemsValueTres = arrayMenuItemsValueTresPmtr;
        arrayMenuItemsValueQuatro = arrayMenuItemsValueQuatroPmtr;
        arrayMenuItemsValueCinco = arrayMenuItemsValueCincoPmtr;
    }

    function traduzirArrayHeaderMenuItems(arrayHeaderMenuItemsValueUmPmtr, arrayHeaderMenuItemsValueDoisPmtr, arrayHeaderMenuItemsValueTresPmtr, arrayHeaderMenuItemsValueQuatroPmtr) {
        arrayHeaderMenuItemsValueUm = arrayHeaderMenuItemsValueUmPmtr;
        arrayHeaderMenuItemsValueDois = arrayHeaderMenuItemsValueDoisPmtr;
        arrayHeaderMenuItemsValueTres = arrayHeaderMenuItemsValueTresPmtr;
        arrayHeaderMenuItemsValueQuatro = arrayHeaderMenuItemsValueQuatroPmtr;
    }

    function traduzirArrayfooterItemsText(arrayfooterItemsTextValueUmPmtr, arrayfooterItemsTextValueDoisPmtr, arrayfooterItemsTextValueTresPmtr, arrayfooterItemsTextValueQuatroPmtr, arrayfooterItemsTextValueCincoPmtr, arrayfooterItemsTextValueSeisPmtr) {
        arrayfooterItemsTextValueUm = arrayfooterItemsTextValueUmPmtr;
        arrayfooterItemsTextValueDois = arrayfooterItemsTextValueDoisPmtr;
        arrayfooterItemsTextValueTres = arrayfooterItemsTextValueTresPmtr;
        arrayfooterItemsTextValueQuatro = arrayfooterItemsTextValueQuatroPmtr;
        arrayfooterItemsTextValueCinco = arrayfooterItemsTextValueCincoPmtr;
        arrayfooterItemsTextValueSeis = arrayfooterItemsTextValueSeisPmtr;
    }

    function traduzirRestanteTextos(buttonAssistaTrailerValuePmtr, exploreButtonValuePmtr, informativoValuePmtr, reserveJaTextValuePmtr, textMaxECholeValuePmtr, titleRetorneArcadiaBayValuePmtr, textReturnArcadiaBayValuePmtr, midiaTextValuePmtr, screenshotsTextValuePmtr, videosTextValuePmtr, reserveJaTextDownValuePmtr, mudarRegiaoTextValuePmtr, escolherJogoTextValuePmtr, escolherPlataformaValuePmtr, comprarGameValuePmtr, footerParagrafoValuePmtr) {
        buttonAssistaTrailerValue = buttonAssistaTrailerValuePmtr;
        exploreButtonValue = exploreButtonValuePmtr;
        informativoValue = informativoValuePmtr;
        reserveJaTextValue = reserveJaTextValuePmtr;
        textMaxECholeValue = textMaxECholeValuePmtr;
        titleRetorneArcadiaBayValue = titleRetorneArcadiaBayValuePmtr;
        textReturnArcadiaBayValue = textReturnArcadiaBayValuePmtr;
        midiaTextValue = midiaTextValuePmtr;
        screenshotsTextValue = screenshotsTextValuePmtr;
        videosTextValue = videosTextValuePmtr;
        reserveJaTextDownValue = reserveJaTextDownValuePmtr;
        mudarRegiaoTextValue = mudarRegiaoTextValuePmtr;
        escolherJogoTextValue = escolherJogoTextValuePmtr;
        escolherPlataformaValue = escolherPlataformaValuePmtr;
        comprarGameValue = comprarGameValuePmtr;
        footerParagrafoValue = footerParagrafoValuePmtr;
    }

    if(idiomaSelecao[0].value === '1' && controleValueUm) {
        document.location.reload();
        controleValueUm = false;
        
    } else if(idiomaSelecao[0].value === '2') {
        traduzirArrayMenuItems('arte', 'juego', 'comunidad', 'blog', 'bienes');
        traduzirArrayHeaderMenuItems('juegos destacados', 'noticias', 'loja', 'soporte');
        traduzirArrayfooterItemsText('aviso de cookies', 'terminos de uso', 'aviso de privacidad', 'centro de apoyo', 'política de uso de materiales', 'declaración de afiliado');
        traduzirRestanteTextos('ver el trailer', 'explorar', 'informativo', 'reservar ahora', "¡Regresa a Arcadia Bay y experimenta dos juegos galardonados de Life is Strange como nunca antes! Las imágenes y la animación remasterizadas dan nueva vida a un gran elenco de personajes e historias emocionantes. La colección Life is Strange Remastered incluye 'Life is Strange Remastered' y 'Life is Strange: Before the Storm Remastered'.", 'volver a la bahía de Arcadia', "Iluminado por su emblemático faro, este pequeño pueblo de la costa de Oregón tiene una historia llena de misterios: la desaparición de Rachel Amber, la corrupción del gobierno, secretos familiares, un enorme incendio forestal y una tormenta sobrenatural. Como Max y Chloe, tus elecciones darán forma al pasado, presente y futuro de Arcadia Bay.", 'medios de comunicación', 'capturas de pantalla', 'vídeos', 'reservar ahora', 'cambia región', 'selecciona tu juego', 'selecciona tu plataforma', 'compra', 'LA VIDA ES EXTRAÑA © 2015, 2021 Square Enix Limited. LA VIDA ES EXTRAÑA: ANTES DE LA TORMENTA © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: ANTES DE LA TORMENTA LIFE IS STRANGE, LIFE IS STRANGE: ANTES DE LA TORMENTA, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX y el logotipo de SQUARE ENIX son marcas registradas o marcas comerciales del grupo de empresas Square Enix . Nintendo Switch es una marca comercial de Nintendo. DECK NINE y DECK NINE GAMES son marcas registradas de Idol Minds, LLC. DONTNOD y DONTNOD Entertainment son marcas registradas de DONTNOD Entertainment, S.A. Todas las demás marcas comerciales son propiedad de sus respectivos dueños.');

    } else if(idiomaSelecao[0].value === '3') {
        traduzirArrayMenuItems('kunst', 'spiel', 'gemeinschaft', 'blog', 'anwesen');
        traduzirArrayHeaderMenuItems('vorgestellte spiele', 'nachricht', 'geschäft', 'mittel');
        traduzirArrayfooterItemsText('cookie-hinweis', 'nutzungsbedingungen', 'hinweis zum datenschutz', 'hilfecenter', 'richtlinie zur materialnutzung', 'affiliate-erklärung');
        traduzirRestanteTextos('sieh dir den trailer an', 'erkunden', 'informativ', 'jetzt reservieren', "Kehren Sie nach Arcadia Bay zurück und erleben Sie zwei preisgekrönte Life is Strange-Spiele wie nie zuvor! Überarbeitete Grafiken und Animationen erwecken eine große Anzahl spannender Charaktere und Handlungsstränge zu neuem Leben. Die Life is Strange Remastered Collection umfasst „Life is Strange Remastered“ und „Life is Strange: Before the Storm Remastered“.", 'rückkehr nach arcadia bay', "Diese kleine Stadt an der Küste Oregons, die von ihrem ikonischen Leuchtturm beleuchtet wird, hat eine Geschichte voller Geheimnisse: das Verschwinden von Rachel Amber, Korruption in der Regierung, Familiengeheimnisse, ein gewaltiger Waldbrand und ein unheimlicher Sturm. Wie bei Max und Chloe werden Ihre Entscheidungen die Vergangenheit, Gegenwart und Zukunft von Arcadia Bay prägen.", 'medien', 'screenshots', 'videos', 'jetzt reservieren', 'region ändern', 'wählen sie ihr spiel aus', 'wählen sie ihre plattform aus', 'kauft ein', 'LIFE IS STRANGE © 2015, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM LIFE IS STRANGE, LIFE IS STRANGE: BEFORE THE STORM, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX und das SQUARE ENIX-Logo sind entweder eingetragene Marken oder Marken der Gruppe Square Enix Firmen. Nintendo Switch ist eine Marke von Nintendo. DECK NINE und DECK NINE GAMES sind eingetragene Marken von Idol Minds, LLC. DONTNOD und DONTNOD Entertainment sind eingetragene Marken von DONTNOD Entertainment, S.A. Alle anderen Marken sind Eigentum ihrer jeweiligen Inhaber.');
    } else if(idiomaSelecao[0].value === '4') {
        traduzirArrayMenuItems('arte', 'gioco', 'comunità', 'blog', 'proprietà');
        traduzirArrayHeaderMenuItems('giochi in primo piano', 'notizia', 'negozio', 'medio');
        traduzirArrayfooterItemsText('avviso sui cookie', 'termini di utilizzo', 'informativa sulla privacy', 'centro di supporto', "politica sull'uso dei materiali", 'dichiarazione di affiliazione');
        traduzirRestanteTextos('guarda il trailer', 'esplorare', 'informativo', 'prenota ora', `Torna ad Arcadia Bay e prova due pluripremiati giochi Life is Strange come mai prima d'ora! La grafica e l'animazione rimasterizzate danno nuova vita a un ampio cast di personaggi e trame entusiasmanti. La collezione Life is Strange Remastered include "Life is Strange Remastered" e "Life is Strange: Before the Storm Remastered".`, 'ritorno alla baia di arcadia', `Illuminata dal suo iconico faro, questa cittadina sulla costa dell'Oregon ha una storia piena di misteri: la scomparsa di Rachel Amber, la corruzione del governo, i segreti di famiglia, un enorme incendio boschivo e una tempesta soprannaturale. Come Max e Chloe, le tue scelte daranno forma al passato, presente e futuro di Arcadia Bay.`, 'media', 'screenshot', 'video', 'prenota ora', 'cambia regione', 'seleziona il tuo gioco', 'seleziona la tua piattaforma', 'compra', 'LA VITA È STRANA © 2015, 2021 Square Enix Limited. LA VITA È STRANA: PRIMA DELLA TEMPESTA © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM LIFE IS STRANGE, LIFE IS STRANGE: BEFORE THE STORM, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX e il logo SQUARE ENIX sono marchi registrati o marchi del gruppo Square Enix aziende. Nintendo Switch è un marchio di Nintendo. DECK NINE e DECK NINE GAMES sono marchi registrati di Idol Minds, LLC. DONTNOD e DONTNOD Entertainment sono marchi registrati di DONTNOD Entertainment, S.A. Tutti gli altri marchi sono di proprietà dei rispettivi proprietari.');
    } else if(idiomaSelecao[0].value === '5') {
        traduzirArrayMenuItems('art', 'jeu', 'communauté', 'blog', 'domaine');
        traduzirArrayHeaderMenuItems('jeux en vedette', 'informations', 'boutique', 'moyen');
        traduzirArrayfooterItemsText('avis sur les cookies', "conditions d'utilisation", 'avis de confidentialité', 'centre de soutien', "politique d'utilisation des matériaux", "déclaration d'affiliation");
        traduzirRestanteTextos('visionnez la bande annonce', 'explorer', 'informatif', 'réservez maintenant', "Retournez à Arcadia Bay et découvrez deux jeux Life is Strange primés comme jamais auparavant ! Les visuels et l'animation remasterisés insufflent une nouvelle vie à un large éventail de personnages et d'intrigues passionnants. La collection Life is Strange Remastered comprend « Life is Strange Remastered » et « Life is Strange : Before the Storm Remastered ».", 'retour à arcadia bay', "Illuminée par son phare emblématique, cette petite ville de la côte de l'Oregon a une histoire remplie de mystères : la disparition de Rachel Amber, la corruption du gouvernement, des secrets de famille, un énorme incendie de forêt et une tempête surnaturelle. Comme Max et Chloé, vos choix façonneront le passé, le présent et l'avenir d'Arcadia Bay.", 'moyens de communication', "captures d'écran", 'vidéos', 'réservez maintenant', 'changer de région', 'sélectionnez votre jeu', 'sélectionnez votre plateforme', 'achète', "LA VIE EST ÉTRANGE © 2015, 2021 Square Enix Limited. LA VIE EST ÉTRANGE : AVANT LA TEMPÊTE © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM LIFE IS STRANGE, LIFE IS STRANGE: BEFORE THE STORM, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX et le logo SQUARE ENIX sont soit des marques déposées soit des marques du groupe Square Enix entreprises. Nintendo Switch est une marque déposée de Nintendo. DECK NINE et DECK NINE GAMES sont des marques déposées d'Idol Minds, LLC. DONTNOD et DONTNOD Entertainment sont des marques déposées de DONTNOD Entertainment, S.A. Toutes les autres marques déposées sont la propriété de leurs propriétaires respectifs.");
    } else if(idiomaSelecao[0].value === '6' || idiomaSelecao[0].value === '7' || idiomaSelecao[0].value === '8') {
        traduzirArrayMenuItems('art', 'game', 'community', 'blog', 'merchandise');
        traduzirArrayHeaderMenuItems('featured games', 'news', 'shop', 'medium');
        traduzirArrayfooterItemsText('cookie notice', 'terms of use', 'privacy notice', 'support center', 'material use policy', 'affiliate statement');
        traduzirRestanteTextos('Watch the trailer', 'explore', 'informative', 'reserve now', "Return to Arcadia Bay and experience two award-winning Life is Strange games like never before! Remastered visuals and animation breathe new life into a large cast of exciting characters and storylines. The Life is Strange Remastered Collection includes 'Life is Strange Remastered' and 'Life is Strange: Before the Storm Remastered'.", 'return to arcadia bay', "Illuminated by its iconic lighthouse, this small town on the Oregon coast has a history filled with mysteries: the disappearance of Rachel Amber, government corruption, family secrets, a massive forest fire, and an unearthly storm. Like Max and Chloe, your choices will shape the past, present, and future of Arcadia Bay.", 'media', 'screenshots', 'videos', 'reserve now', 'change region', 'select your game', 'select your platform', 'buy', 'LIFE IS STRANGE © 2015, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM © 2017, 2021 Square Enix Limited. LIFE IS STRANGE: BEFORE THE STORM LIFE IS STRANGE, LIFE IS STRANGE: BEFORE THE STORM, LIFE IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX and the SQUARE ENIX logo are either registered trademarks or trademarks of the group of Square Enix companies. Nintendo Switch is a trademark of Nintendo. DECK NINE and DECK NINE GAMES are registered trademarks of Idol Minds, LLC. DONTNOD and DONTNOD Entertainment are registered trademarks of DONTNOD Entertainment, S.A. All other trademarks are the property of their respective owners.');
    }

    if(idiomaSelecao[0].value !== '1') {
        arrayMenuItems = [arrayMenuItemsValueUm, arrayMenuItemsValueDois, arrayMenuItemsValueTres, arrayMenuItemsValueQuatro, arrayMenuItemsValueCinco];
        arrayHeaderMenuItems = [arrayHeaderMenuItemsValueUm, arrayHeaderMenuItemsValueDois, arrayHeaderMenuItemsValueTres, arrayHeaderMenuItemsValueQuatro];
        arrayfooterItemsText = [arrayfooterItemsTextValueUm, arrayfooterItemsTextValueDois, arrayfooterItemsTextValueTres, arrayfooterItemsTextValueQuatro, arrayfooterItemsTextValueCinco, arrayfooterItemsTextValueSeis];
        [buttonAssistaTrailer.innerHTML, exploreButton.innerHTML, informativo.innerHTML, reserveJaText.innerHTML, textMaxECholeES.innerHTML, titleRetorneArcadiaBay.innerHTML, textReturnArcadiaBayES.innerHTML, midiaText.innerHTML, screenshotsText.innerHTML, videosText.innerHTML, reserveJaTextDown.innerHTML, mudarRegiaoText.innerHTML, escolherJogoText.innerHTML, escolherPlataforma.innerHTML, comprarGame.innerHTML, footerParagrafo.innerHTML] = [buttonAssistaTrailerValue, exploreButtonValue, informativoValue, reserveJaTextValue, textMaxECholeValue, titleRetorneArcadiaBayValue, textReturnArcadiaBayValue, midiaTextValue, screenshotsTextValue, videosTextValue, reserveJaTextDownValue, mudarRegiaoTextValue, escolherJogoTextValue, escolherPlataformaValue, comprarGameValue, footerParagrafoValue];

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
    
    localStorage.setItem('idioma', idiomaSelecao[0].value)
}
