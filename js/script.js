document.title = "Adventure Game"
let game = document.getElementById('game-container')
let title = document.getElementById('title')
let description = document.getElementById('description')
let buttons = document.getElementById('game-buttons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')

let inventoryItems = { "Knife" : false, "Pistol" : false}

start()

function start(){
    Intervals()
    ChangeTitle("Adventure Game")
    ChangeBackground("Start")
    ChangeButtonText("Start", "Opties", "Stop")
    ChangeDescriptionText("Welkom bij deze coole adventure game! :)")
    buttons.style.top = "77.5%"
    buttons.style.position = "relative"
    /*button1.style.display = "block"
    button2.style.display = "block"
    button3.style.display = "block"*/
    
    button1.onclick = function(){onClickButton()}
    button2.onclick = function(){onClickButton()}
    button3.onclick = function(){onClickButton()}
}

function onClickButton(){
    buttons.style.top = "0"
    button1.style.position = "relative"
    button2.style.position = "relative"
    button3.style.position = "relative"
    button1.style.left = "45%"
    button2.style.left = "45%"
    button3.style.left = "45%"
}

function ChangeButtonText(buttonText1, buttonText2, buttonText3){
    button1.innerHTML = buttonText1
    button2.innerHTML = buttonText2
    button3.innerHTML = buttonText3
}

function ChangeTitle(titleText){
    title.innerHTML = titleText
    title.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function ChangeDescriptionText(descText){
    description.innerHTML = descText
    description.style.backgroundColor = "rgba(255,255,255,0.5)";
}

function ChangeBackground(background){
    game.style.background = "url('./images/" + background + ".png') no-repeat"
    game.style.backgroundSize = "100%"
}

function CheckInventoryItem(){
    if (inventoryItems["Knife"] == false && inventoryItems["Pistol"] == false){
        inventoryItem.style.display = "none"
    }
    if (inventoryItems["Knife"] == true){
        ChangeInventoryItem("Knife")
    }
    if (inventoryItems["Pistol"] == true){
        ChangeInventoryItem("Pistol")
    }
}

function ChangeInventoryItem(item){
    inventoryItem.style.display = "block"
    inventoryItem.alt = item
    inventoryItem.src = "./images/" + item + ".png"
}

function Intervals(){
    setInterval(CheckInventoryItem, 100)
}



/*let span = document.createElement('span')
    span.innerHTML = item
    span.id = "inventoryItemText"
    document.body.appendChild(span)*/