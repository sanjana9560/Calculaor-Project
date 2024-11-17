const inputBox = document.getElementById("inputbtn");

function displaybtn(input){
    console.log(input)
    // inputBox.Value += input;
    return  inputBox.value += input;
}
function calculateBtn(){
    return inputBox.value = eval(inputBox.value)
};

function clearBtn(input){
    return inputBox.value = "";
};
function clearSingleElement(){
    inputBox.value = inputBox.value.slice(0,-1) 
}

document.addEventListener('keydown',function(event){
let key = event.key;
if((key>=0 && key<=9)|| ['+','-','/','*','.'].includes(key)){
   return inputBox.value += key;
}
else if(key==='='|| key==='Enter'){
    calculateBtn();
}
else if(key==='Backspace'){
    return clearSingleElement();
}
else if(key==='Escape'){
    return clearBtn();
}
})
