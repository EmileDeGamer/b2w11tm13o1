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
let kills = 0

main()

function main(){
    CheckInventoryItem()
    ChangeTitle("Adventure Game")
    ChangeBackground("Main", "cover")
    ChangeButtonText("Start", "Opties", "")
    ChangeDescriptionText("Welkom bij deze coole adventure game! :)")
    buttons.style.position = "relative"
    ChangeButtonFunction(start, options, )
    ChangeButtonPosition("relative", "relative", "relative")
    ChangeButtonOffsetLeft("45%", "45%", "45%")
    ChangeButtonDisplay("block", "block", "none")
    //console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
}

function start(){
    ChangeObject("Knife")
    ChangeObjectPosition("absolute")
    ChangeObjectOffsetTop("96.5%")
    ChangeObjectOffsetLeft("80%")
    ChangeTitle(" Level 1: Het prachtige bos")
    ChangeDescriptionText("Ergens in dit mooie bos ligt een mes verstopt! :)")
    ChangeButtonDisplay("none", "none", "none")
    ChangeBackground("Start", "cover")
}

function level1(){
    ChangeInventoryItem("Knife")
    buttons.style.top = "77.5%"
    ChangeButtonPosition("relative", "relative", "relative")
    ChangeButtonDisplay("inline-block", "inline-block", "inline-block")
    ChangeButtonOffsetLeft("0%", "0%", "0%")
    ChangeButtonText("Links verder door het bos", "Rechtdoor", "Rechts over brug")
    ChangeButtonFunction(links, rechtdoor, level2)
    ChangeDescriptionText("Kies nu waar u naartoe wilt! :)")
}

function links(){
    ChangeBackground("Beer", "contain")
    ChangeButtonText("Steek de beer neer", "Laat de beer u opeten", "")
    ChangeButtonFunction(steekBeer, opetenDoorBeer, )
    ChangeButtonDisplay("inline-block", "inline-block", "none")
    ChangeDescriptionText("Helaas, u bent een beer tegengekomen! :(")
    ChangeTitle("Beer!")
}

function rechtdoor(){
    ChangeBackground("DOOD", "contain")
    Restart()
    ChangeDescriptionText("Helaas, u bent tegen een boom gelopen waardoor u dood bent gegaan! :(")
    ChangeTitle("DOOD")
}

function level2(){
    ChangeBackground("Brug", "cover")
    ChangeButtonDisplay("inline-block", "inline-block", "inline-block")
    ChangeTitle("Level 2: De levensgevaarlijke brug")
    ChangeDescriptionText("Kies wat u op de brug wilt doen! :)")
    ChangeButtonText("Verder gaan op de brug", "Zwemmend opzoek gaan naar een eiland", "Jezelf neersteken")
    ChangeButtonFunction(brug, zwemmen, neersteken)
}

function brug(){

}

function zwemmen(){

}

function neersteken(){
    kills++
    CheckKills()
    ChangeBackground("DOOD", "contain")
    Restart()
    ChangeDescriptionText("Helaas, u heeft u zelf neergestoken! :(")
    ChangeTitle("DOOD")
}

function steekBeer(){
    level1()
    ChangeBackground("Start", "cover")
    ChangeButtonDisplay("none", "inline-block", "inline-block")
    kills++
    CheckKills()
    alert("U heeft de beer verslagen! :) \nVervolg u route! :)")
}

function opetenDoorBeer(){
    ChangeBackground("DOOD", "contain")
    Restart()
    ChangeDescriptionText("Helaas, u bent opgegeten door een beer! :(")
    ChangeTitle("DOOD")
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

function Restart(){
    ChangeButtonDisplay("none", "inline-block", "none")
    ChangeButtonText("", "Opnieuw", "")
    ChangeButtonFunction("",reloadPage,)
}

function reloadPage(){
    location.reload()
}

function CheckKills(){
    if (kills == 1){
        ChangeInventoryItem("KnifeWithBlood")
    }
    if (kills == 2){
        ChangeInventoryItem("KnifeWithDoubleBlood")
    }
}

function ChangeButtonFunction(function1, function2, funtion3){
    button1.onclick = function(){function1()}
    button2.onclick = function(){function2()}
    button3.onclick = function(){funtion3()}
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

function ChangeBackground(background, type){
    game.style.background = "url('./images/" + background + ".png') no-repeat"
    game.style.backgroundSize = type
    game.style.backgroundPosition = "center"
    game.style.width = "100vw"
    game.style.height = "100vh"
}

function CheckInventoryItem(){
    if (inventoryItems["Knife"] == false && inventoryItems["Pistol"] == false){
        inventoryItem.style.display = "none"
    }
}

function ChangeInventoryItem(item){
    inventoryItem.style.display = "block"
    inventoryItem.alt = item
    inventoryItem.src = "./images/" + item + ".png"
}

function objectPickup(name){
    inventoryItems[name] = true
    object.style.display = "none"
    alert('Je hebt de ' + name + " gevonden! :)")
    if (name == "Knife"){
        level1()
    }
}

function ChangeObject(name){
    let img = document.createElement('img')
    img.id = "Object"
    img.src = "./images/" + name + ".png"
    img.onclick = function(){objectPickup(name)}
    img.style.width = "25px"
    img.style.height = "25px"
    document.body.appendChild(img)
    object = document.getElementById('Object')
}

function ChangeObjectPosition(pos){
    object.style.position = pos
}

function ChangeObjectOffsetTop(offset){
    object.style.top = offset
}

function ChangeObjectOffsetLeft(offset){
    object.style.left = offset
}

/*let span = document.createElement('span')
    span.innerHTML = item
    span.id = "inventoryItemText"
    document.body.appendChild(span)*/