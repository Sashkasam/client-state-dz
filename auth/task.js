const form = document.querySelector('form')
const  welcome = document.querySelector('.welcome')
const signin = document.querySelector('.signin')
const textStored = localStorage.getItem('userId')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    const formData = new FormData(form)
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.onload = function () {
        const authResponse = JSON.parse(xhr.response)
        const userId = authResponse['user_id']
        if(userId === undefined) {
            alert('Неверный логин/пароль')
            form.reset()
        }else {
            localStorage.setItem('userId', userId)
            signin.classList.remove('signin_active')
            welcome.classList.add('welcome_active')
            welcome.textContent = `Добро пожаловать, пользователь #${userId}`
        }

    }
    xhr.send(formData)


})

document.addEventListener('DOMContentLoaded', function () {
    if(textStored){
        signin.classList.remove('signin_active')
        welcome.classList.add('welcome_active')
        welcome.textContent = `Добро пожаловать, пользователь #${textStored}`
    }
})

