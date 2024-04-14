const textArea = document.querySelector('textarea')
const textStored = localStorage.getItem('text')
const btn = document.querySelector('button')

textArea.addEventListener('input', function () {
    localStorage.setItem('text', textArea.value)
    })
textArea.value = textStored

btn.addEventListener('click', function () {
    textArea.value = ''
    localStorage.removeItem('text')
})



