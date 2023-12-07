let res1 = document.querySelector("#res");
let inp = document.querySelector("#inp2");
let display = document.querySelector("#inp1");
let copy = document.querySelector("#copy-btn");

let btn = document.querySelector("#generate");

// setting the length of the password
res1.textContent = inp.value;
inp.oninput = function(){
    res1.textContent = inp.value;
    console.log(res1.texContent)
}


// copying the password to clipboard
copy.addEventListener("click", function(){
    let pwd = display.value;
    navigator.clipboard.writeText(pwd);
})

// function that invoke when we click on generate button
