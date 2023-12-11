const display = document.querySelector("[data-display]");
// have selected the above element using custom attribute ("[]")
const copyBtn = document.querySelector(".copy-btn");
const copyMsg = document.querySelector("[data-copiedText]");
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
let checkCount = "";

handleSlider();
// Copy password button
copyBtn.addEventListener('click', () => {            
    if(display.value != ""){
    navigator.clipboard.writeText(display.value);
    copyText();
    }
});

function handleSlider() {
    pwdlength.innerHTML = slider.value;
    slider.oninput = function() {
            pwdlength.innerHTML = slider.value;
        };
};

function strengthIndicator (color) {
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

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    // if checkbox is checked then change value of has... to true
    if(uppercaseCheck.checked){
        hasUpper = true;
    }
    if(lowercaseCheck.checked){
        hasLower = true;
    }
    if(symbolsCheck.checked){
        hasNum = true;
    }
    if(numbersCheck.checked){
        hasSym = true;
    }

    // conditions according to which we'll set color of strength
    if(hasUpper && hasLower && hasNum && hasSym && passwordLength >= 8){
        strengthIndicator("#0f0");
    }
    else if(hasUpper && hasLower && hasNum && passwordLength >= 8){
        strengthIndicator("#ff0");
    }
    else {
        strengthIndicator("#f00");
    }
};

async function copyText () {
    try {
        await navigator.clipboard.writeText(display.value);
        copyMsg.innerHTML = "Copied";
    } catch (error) {
        copyMsg.innerHTML = "Failed";
    }
};
copyMsg.classList.add("active");

setTimeout(() => {
    copyMsg.classList.remove("active")
},2000);

function checkBoxChange () {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked){
            checkCount++;
        }
    })
}

// condition if user set password length less than checkcount
if(pwdlength < checkCount){
    pwdlength = checkCount;
    handleSlider();
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', checkBoxChange())
})

mainBtn.addEventListener('click', () => {
    checkBoxChange();
})