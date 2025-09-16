const colorCanvas = document.querySelector('#colorCanvas')
const colors = document.querySelectorAll('.color-swatch')
const currentColor = document.querySelector('#currentColor')
const resetCanvas = document.querySelector('#resetCanvas')

colors.forEach((color) =>{
    color.addEventListener('click', ()=>{
        console.log('clicked')
        console.log(color.dataset.color);
        const myColor = color.dataset.color //grabs the color from data-color field on my html element.
        colorCanvas.style.backgroundColor = myColor
        currentColor.innerText = `${myColor.toUpperCase()}`
    })

}) 


resetCanvas.addEventListener('click', ()=>{
    colorCanvas.style.backgroundColor = 'white'
    currentColor.innerText = 'None'
})