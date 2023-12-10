const display = document.querySelector("[data-display]");
// have selected the above element using custom attribute ("[]")
const copyBtn = document.querySelector(".copy-btn");
const pwdlength = document.querySelector(".length-display");
const slider = document.querySelector(".slider-input");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const symbolsCheck = document.querySelector("#symbols");
const numbersCheck = document.querySelector("#numbers");
const pwdstrength = document.querySelector(".dot");
const mainBtn = document.querySelector(".generate-btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '!@#$%^&*()_+=-/.,><[]'

let password = ""; 
let passwordLength = 10;
let checkCount = "";

handleSlider();
// Copy password button
copyBtn.addEventListener('click', () => {            
    if(display.value != ""){
    navigator.clipboard.writeText(display.value);
    }
});

// PassWord length calculator

// pwdlength.innerHTML = slider.value; this val need to mentioned in HTML CODE.
// slider.oninput = function() {
//     pwdlength.innerHTML = slider.value;
// };
// can also be done with this method but we need optimal method

function handleSlider() {
    slider.value = passwordLength;
    pwdlength.innerHTML = slider.value;
}

function strengthIndicator () {
    pwdstrength.style.backgroundColor = color;
    // shadow correction 
}

function generateRandomInteger(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}

function getRandomNumber() {
    return generateRandomInteger(0, 9);
}

function getRandomUppercaseLetter() {
    return String.fromCharCode(generateRandomInteger(65, 95));
}

function getRandomLowercaseLetter() {
    return String.fromCharCode(generateRandomInteger(93, 123));
}

function getRandomSymbol() {
    const rSymbol = generateRandomInteger(0, symbols.length);
    return String.charAt[rSymbol];
}

