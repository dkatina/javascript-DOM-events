const addItem = document.querySelector('#addItem')
const itemList = document.querySelector('#itemList')
const delegationOutput = document.querySelector('#delegationOutput')
let itemCounter = 3

//Helper function to log all delegation events

const logDelegation = (message) => {
    const timestamp = new Date().toLocaleTimeString(); // timestamp
    const eventInfo = document.createElement('div') //creating a new div
    eventInfo.innerHTML = `
        <strong>${timestamp}</strong> - ${message}
    `
    delegationOutput.appendChild(eventInfo)
}


//Adding new items to the list
addItem.addEventListener('click', ()=>{
    itemCounter++ //increment my item counter to be used in next item
    const newItem = document.createElement('li');
    newItem.innerHTML = `Item ${itemCounter} <button class="remove-btn">Remove</button>`
    itemList.appendChild(newItem);
    logDelegation(`Added Item ${itemCounter}`);
});


itemList.addEventListener('click', (event)=>{
    
    //Check if the clicked element is a remove button
    if (event.target.classList.contains('remove-btn')){ //checking the class list for the remove-btn class 
        const listItem = event.target.parentElement; //grabbing the li that the button lives in
        const itemText = listItem.textContent.split(' ')[0]; //
        console.log(itemText)
        listItem.remove(); //Remove the list item
        logDelegation(`Removed ${itemText} using delegation`)

    } else if (event.target.tagName == 'LI'){
        event.target.style.color = 'red'
    }
    
    ;

})
