const textArea = document.querySelector('textarea')
const textStored = localStorage.getItem('text')
const btn = document.querySelector('button')
if(textStored) {
    textArea.value = textStored
}else {
    textArea.onchange = function () {
        localStorage.setItem('text', textArea.value)
    }
}
btn.addEventListener('click', function () {
    textArea.value = ''
    localStorage.removeItem('text')
})



