//Sidebar
const menuItems = document.querySelectorAll('.menu-item')

//Message
const messageNoti = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message ')
const messageSearch = document.querySelector('#message-search')

//theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')

//Font size
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')

//Color
const colorPick = document.querySelectorAll('.choose-color span')

//Background
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')




//===============================Sidebar======================================//

//remove active class of menu item
const changeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActive();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none'
        }
        else {
            document.querySelector('.notifications-popup').style.display = 'block'
            document.querySelector('#notifications .notifications-count').style.display = 'none'
        }
    })
})




//===============================Message======================================//


//Search message

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)


messageNoti.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNoti.querySelector('.notifications-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})




//===============================Theme Custom======================================//

const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)



//===============================Font size======================================//

const removeSizeSelect = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        removeSizeSelect();
        //let fontSize;
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('----sticky-top-left', '-10rem')
            root.style.setProperty('----sticky-top-right', '-33rem')
        }


        document.querySelector('html').style.fontSize = fontSize;
    })
})



//===============================Color====================================//

const removeColorActive = () => {
    colorPick.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

colorPick.forEach(color => {
    color.addEventListener('click', () => {
        removeColorActive()
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active')

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})


//===============================Background====================================//

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    window.location.reload()
});
bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBg()
});
bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'

    bg3.classList.add('active')
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBg()
});