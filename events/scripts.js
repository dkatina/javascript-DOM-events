const output = document.querySelector('#output')


const keyboardInput = document.querySelector('#keyboardInput')





//Helper function to display all of our events inside the output div

const displayEvent = (eventType, details) => {
    const timestamp = new Date().toLocaleTimeString(); // timestamp
    const eventInfo = document.createElement('div') //creating a new div
    eventInfo.innerHTML = `
        <strong>${timestamp}</strong> - <span>${eventType}: ${details}</span>
    `
    output.appendChild(eventInfo) //adding new div to output log
}


// Mouse Event Listeners

//Click Event - fires when a button is clicked
const clickBtn = document.querySelector('#clickBtn')

clickBtn.addEventListener('click',(event) =>{
    displayEvent('CLICK', `Button clicked! Event Target: ${event.target.tagName}`)
})


// Mouse over event - firest when mouse moves over the button
const hoverBtn = document.querySelector('#hoverBtn')

hoverBtn.addEventListener('mouseover', (event) =>{
    displayEvent('HOVER', `Cursor hovering over button: ${event.target.tagName}`)
})


// Mouse out event - fires when you remove your mouse from element
hoverBtn.addEventListener('mouseout', (event) =>{
    displayEvent('MOUST OUT', `Cursor removed from button: ${event.target.tagName}`)
})

// KeyBoard inputs

// Key Down - Event when you press a key down
keyboardInput.addEventListener('keydown', (event) => {
    displayEvent('KEY DOWN', `Key: ${event.key}, Code: ${event.code} pressed.`)
})

//Key Up - Event when you release a key (let the key up)
keyboardInput.addEventListener('keyup', (event) =>{
    displayEvent('KEY UP', `${event.key}, Code: ${event.code} released.`)
})


// Form Event Listeners

//Focus Event - fires when input gains focus

const formInput = document.querySelector('#formInput')
formInput.addEventListener('focus', (event) => {
    displayEvent('FOCUS', 'Input field focus!') // clicked into the input
})

//Blur Event - First when input loses focus (user clicks away)
formInput.addEventListener('blur', (event) => {
    displayEvent('Blur', 'Clicked out of input!') // clicked into the input
})

//Submit event - fires when form is submitted
const demoForm = document.querySelector('#demoForm')

demoForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //Prevents the page from reloading upon submit
    displayEvent('FORM SUBMIT', `Form submitted with value: ${formInput.value}`)
    console.log(event.target.formInput.value)
    formInput.value = '' //resetting the input field's value to nothing
    
})


// ------------ Dynamic Button Creation

const myBtn = document.createElement('button')
myBtn.textContent = 'Clear Output';
myBtn.className = 'button';
myBtn.addEventListener('click', (event) =>{
    output.innerHTML = `<p>Event output will appear here...</p>`
})

const demoContainer = document.querySelector(".demo-container")
demoContainer.appendChild(myBtn)








