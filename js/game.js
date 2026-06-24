const type = "The quick fox jumped over the lazy dog. The cow jumped over the moon. The dish ran away with the spoon.";
let string = "";


let index = 0;
let typeScreen = document.querySelector(".type-screen");

window.addEventListener("keydown", (e) => {
    keyDown(e);
    e.preventDefault();

    if(e.key == string[index]){
        index++;
        typeScreen.innerHTML = '<mark>' + string.slice(0, index) + '</mark>' + string.slice(index, type.length);
    }
});

window.addEventListener("keyup", (e) => {
    keyUp(e);
    e.preventDefault();
});

window.onload = function () {

    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    
    console.log(data);
    console.log('hello world');

    string = data;

    if(data == null || data.length == 0){
        string = type;
    }

    typeScreen.innerHTML = string;

    loadKeys();
}