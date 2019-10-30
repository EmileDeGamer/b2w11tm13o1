document.title = "Adventure Game"
let game = document.getElementById('game-container')
let title = document.getElementById('title')
let description = document.getElementById('description')
let buttons = document.getElementById('game-buttons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let inventoryItem = document.getElementById('inventoryItem')
let object

let inventoryItems = { "Knife" : false, "Pistol" : false}
let fullscreenEnabled = "false"

main()

function main(){
    Intervals()
    ChangeTitle("Adventure Game")
    ChangeBackground("Main")
    ChangeButtonText("Start", "Opties", "")
    ChangeDescriptionText("Welkom bij deze coole adventure game! :)")
    buttons.style.position = "relative"
    button1.onclick = function(){start()}
    button2.onclick = function(){options()}
    ChangeButtonPosition("relative", "relative", "relative")
    ChangeButtonOffsetLeft("45%", "45%", "45%")
    ChangeButtonDisplay("block", "block", "none")
    //console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
}

function start(){
    buttons.style.top = "77.5%"
    ChangeButtonPosition("relative", "relative", "relative")
    ChangeButtonDisplay("inline-block", "inline-block", "inline-block")
    ChangeButtonOffsetLeft("0%", "0%", "0%")
    ChangeButtonText("Links", "Rechtdoor", "Rechts")
    button1.onclick = function(){links()}
    button2.onclick = function(){rechtdoor()}
    button3.onclick = function(){rechts()}
    ChangeTitle(" Level 1: Vind een mes")
    ChangeDescriptionText("Ergens ligt een mes vind het! :D")
    ChangeBackground("Start")
    ChangeObject("Knife")
    ChangeObjectPosition("absolute")
    object.style.top = "96.5%"
    object.style.left = "80%"
}

function links(){
    ChangeBackground("Links")
    ChangeButtonText("Terug", "Rechtdoor", "Rechts")
}

function rechtdoor(){
    ChangeBackground("Rechtdoor")
    ChangeButtonText("Links", "Terug", "Rechts")
}

function rechts(){
    ChangeBackground("Rechts")
    ChangeButtonText("Links", "Rechtdoor", "Terug")
}

function options(){
    ChangeButtonDisplay("block", "block", "none")
    button2.onclick = function(){main()}
    if (fullscreenEnabled == "true"){
        button1.onclick = function(){exitFullscreen()}
        ChangeButtonText("Uit Fullscreen", "Terug")
    }
    else if (fullscreenEnabled == "false"){
        button1.onclick = function(){fullscreen()}
        ChangeButtonText("Fullscreen", "Terug")
    }
}

function fullscreen(){
    game.requestFullscreen()
    fullscreenEnabled = "true"
    options()
}

function exitFullscreen(){
    document.exitFullscreen()
    fullscreenEnabled = "false"
    options()
}

function ChangeButtonPosition(pos1, pos2, pos3){
    button1.style.position = pos1
    button2.style.position = pos2
    button3.style.position = pos3
}

function ChangeButtonOffsetLeft(offset1, offset2, offset3){
    button1.style.left = offset1
    button2.style.left = offset2
    button3.style.left = offset3
}

function ChangeButtonDisplay(display1, display2, display3){
    button1.style.display = display1
    button2.style.display = display2
    button3.style.display = display3
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
    game.style.backgroundSize = "cover"
    game.style.backgroundPosition = "center"
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

function objectPickup(){
    inventoryItems["Knife"] = true
    object.style.display = "none"
}

function ChangeObject(name){
    let img = document.createElement('img')
    img.id = "Object"
    img.src = "./images/" + name + ".png"
    img.onclick = function(){objectPickup()}
    img.style.width = "25px"
    img.style.height = "25px"
    document.body.appendChild(img)
    object = document.getElementById('Object')
}

function ChangeObjectPosition(pos){
    object.style.position = pos
}

/*let span = document.createElement('span')
    span.innerHTML = item
    span.id = "inventoryItemText"
    document.body.appendChild(span)*/