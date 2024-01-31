const Display = document.getElementById('display')

function keyBtn(input){
    Display.value += input;
}
function singleNumberDel(){
    Display.value = Display.value.toString().slice(0,-1);
}
function allClear(){
    Display.value = " "
}
function calculate(){
    try{
        Display.value = eval(Display.value)
    }
    catch(error){
        Display.value = "ERROR"
    }
}