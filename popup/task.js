const modalWindow = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

const showModalWindow = () => {
    if(getCookie('modal') !== 'close') {
        modalWindow.classList.add('modal_active')
    }

    modalClose.onclick = () => {
        modalWindow.classList.remove('modal_active')
        setCookie('modal', 'close')
    }
}

window.addEventListener('load', showModalWindow)


function getCookie(name) {
    const pairs = document.cookie.split("; ")
    const cookie = pairs.find(p => p.startsWith(name + "="))
    return cookie ? cookie.split('=')[1] : null
}

function  setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value)
}
