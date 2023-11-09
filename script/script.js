function abrirFeatures() {  
    let features1 = document.querySelector('.list1')
    let features2 = document.querySelector('.list2')
    let features3 = document.querySelector('.list3')
    let features4 = document.querySelector('.list4')
    let verLista = document.querySelector('.sub-menu-features>div')
    let btnFeatures = document.getElementById('btn-features')
    let arrowLeft = document.querySelector('img#arrow-down-left')

    if (features1.style.display === 'none') {
        features1.style.display = 'block'
        features2.style.display = 'block'
        features3.style.display = 'block'
        features4.style.display = 'block'
        verLista.style.display = 'block'
        btnFeatures.style.margin = '148px 0 0 0'
        btnFeatures.style.color = 'hsl(0, 0%, 8%)'
        arrowLeft.style.transform = 'rotate(-180deg)'
    } else {
        features1.style.display = 'none'
        features2.style.display = 'none'
        features3.style.display = 'none'
        features4.style.display = 'none'
        verLista.style.display = 'none'
        btnFeatures.style.margin = '8px 0 0 0'
        btnFeatures.style.color = 'hsl(0, 0%, 41%)'
        arrowLeft.style.transform = 'rotate(-360deg)'
    }
}

function abrirCompany() {
    let company1 = document.querySelector('.list5')
    let company2 = document.querySelector('.list6')
    let company3 = document.querySelector('.list7')
    let verListas = document.querySelector('.sub-menu-company>div')
    let btnCompany = document.getElementById('btn-company')
    let arrowRight = document.querySelector('img#arrow-down-right')

    if (company1.style.display === 'none') {
        company1.style.display = 'block'
        company2.style.display = 'block'
        company3.style.display = 'block'
        verListas.style.display = 'block'
        btnCompany.style.margin = '120px 0 0 0'
        btnCompany.style.color = 'hsl(0, 0%, 8%)'
        arrowRight.style.transform = 'rotate(-180deg)'
    } else {
        company1.style.display = 'none'
        company2.style.display = 'none'
        company3.style.display = 'none'
        verListas.style.display = 'none'
        btnCompany.style.margin = '8px 0 0 0'
        btnCompany.style.color = 'hsl(0, 0%, 41%)'
        arrowRight.style.transform = 'rotate(-360deg)'
    }
}

function menuResponsivo() {
    let openMenu = document.querySelector('.open-menu')

    if (openMenu.style.display === 'none') {
        openMenu.style.display = 'block'
        document.querySelector('.icon').src = "./images/icon-close-menu.svg"
    } else {
        openMenu.style.display = 'none'
        document.querySelector('.icon').src = "./images/icon-menu.svg"
    }
}

function showMobileFeatures() {
    let showFeatures = document.querySelector('.show-features')
    let arrowLeftMobile = document.querySelector('.arrow-left')

    if (showFeatures.style.display === 'none') {
        showFeatures.style.display = 'block'
        arrowLeftMobile.style.transform = 'rotate(180deg)'
        document.querySelector('.feat').style.color = 'hsl(0, 0%, 8%)'
    } else {
        showFeatures.style.display = 'none'
        arrowLeftMobile.style.transform = 'rotate(360deg)'
        document.querySelector('.feat').style.color = 'hsl(0, 0%, 41%)'
    }
}   

function showMobileCompany() {
    let showCompany = document.querySelector('.show-company')
    let arrowRightMobile = document.querySelector('.arrow-right')

    if (showCompany.style.display === 'none') {
        showCompany.style.display = 'block'
        arrowRightMobile.style.transform = 'rotate(180deg)'
        document.querySelector('.comp').style.color = 'hsl(0, 0%, 8%)'
    } else {
        showCompany.style.display = 'none'
        arrowRightMobile.style.transform = 'rotate(360deg)'
        document.querySelector('.comp').style.color = 'hsl(0, 0%, 41%)'
    }
}