document.title = "Adventure Game"
let title = document.getElementById('title')
let description = document.getElementById('description')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')

button1.onclick = function(){onClickButton()}
button2.onclick = function(){onClickButton()}
button3.onclick = function(){onClickButton()}

title.innerHTML = "Adventure Game"

function onClickButton(){
    console.log('pizza')
}

ChangeButtonText("Start", "Opties", "Stop")
ChangeDescriptionText("Welkom bij deze coole adventure game! :)")
ChangeInventoryItem("Knife")
function ChangeButtonText(buttonText1, buttonText2, buttonText3){
    button1.innerHTML = buttonText1
    button2.innerHTML = buttonText2
    button3.innerHTML = buttonText3
}

function ChangeDescriptionText(descText){
    description.innerHTML = descText
}

function ChangeInventoryItem(item){
    inventoryItem.alt = item
    inventoryItem.src = "./images/" + item + ".png"
    let span = document.createElement('span')
    span.innerHTML = item
    span.id = "inventoryItemText"
    document.body.appendChild(span)
}