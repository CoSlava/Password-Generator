const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pasOne = document.getElementById("password1")
let pasTwo = document.getElementById("password2")

function getRandomChar() {
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function generate() {
    let passwordOne = ""
    for (let i=0; i<15; i++) {
    passwordOne += getRandomChar()
    pasOne.textContent = passwordOne
    }{ let passwordTwo = ""
        for (let i=0; i<15; i++) {
        passwordTwo += getRandomChar()
        pasTwo.textContent = passwordTwo
        }
    }
}
