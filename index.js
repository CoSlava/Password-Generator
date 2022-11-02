const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pasOne = document.getElementById("password1")
const pasTwo = document.getElementById("password2")
const alertMsg = document.getElementById("alert")

function copyPasOne(){
    document.execCommand("copy")
    alert("Copied to clipboard")
}

function copyPasTwo(){
    document.execCommand("copy")
    alert("Copied to clipboard")
}

function getRandomChar() {
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function generate() {
    if (document.getElementById("eight-characters").checked === true){
        let passwordOne = ""
        for (let i=0; i<8; i++) {
        passwordOne += getRandomChar()
        pasOne.textContent = passwordOne
        alertMsg.textContent = ""
        }
    } else if (document.getElementById("sixteen-char").checked === true){
            let passwordOne = ""
            for (let i=0; i<16; i++) {
            passwordOne += getRandomChar()
            pasOne.textContent = passwordOne
            alertMsg.textContent = ""
            }
    } else {
        alertMsg.textContent = "*Please, select the password length"
    }
    { if (document.getElementById("eight-characters").checked === true){
        let passwordTwo = ""
        for (let i=0; i<8; i++) {
        passwordTwo += getRandomChar()
        pasTwo.textContent = passwordTwo
        alertMsg.textContent = ""
        }
    } else if (document.getElementById("sixteen-char").checked === true) {
        let passwordTwo = ""
        for (let i=0; i<16; i++) {
        passwordTwo += getRandomChar()
        pasTwo.textContent = passwordTwo
        alertMsg.textContent = ""
        }
    }
    }
}