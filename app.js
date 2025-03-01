// calculator
let display = document.querySelector("#display");
let isEqual = false;

function toDisplay(input){
    displayCheck();
    display.value += input;
}

function displayCheck(){
    if(isEqual){
        clearDisplay();
        isEqual = false;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
   try{
    display.value = eval(display.value);
   }
   catch(error){
    display.value = "syntax error"
   }
    isEqual=true;
}