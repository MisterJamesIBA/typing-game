const type = "The quick fox jumped over the lazy dog. The cow jumped over the moon. The dish ran away with the spoon.";
let string = "";


let index = 0;
let typeScreen = document.querySelector(".type-screen");

let timeHandle = document.querySelector("#time");
let acuracyHandle = document.querySelector("#accuracy");
let percentHandle = document.querySelector("#percent");

let time = 0;
let second = 0;
let minute = 0;

let accuracy = 100;

function startTest() {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');

    console.log(data);
    console.log('hello world');

    string = data;

    if (data == null || data.length == 0) {
        string = type;
    }
    else {
        accuracy -= 1;
    }

    acuracyHandle.innerHTML = `${accuracy}%`;

    typeScreen.innerHTML = '<span class="typed">' + string.slice(0, index) + '</span>' + "<span class='next'>" + string.slice(index, index + 1) + '</span>' + string.slice(index + 1, type.length);

    loadKeys();
}

window.addEventListener("keydown", (e) => {
    keyDown(e);
    e.preventDefault();

    percentHandle.innerHTML = `${Math.floor(index / string.length * 100)}%`;

    if (e.key == string[index]) {
        index++;
        typeScreen.innerHTML = '<span class="typed">' + string.slice(0, index) + '</span>' + "<span class='next'>" + string.slice(index, index + 1) + '</span>' + string.slice(index + 1, type.length);

    }

    if (index == string.length) {
        console.log('win');
    }
});

window.addEventListener("keyup", (e) => {
    keyUp(e);
    e.preventDefault();
});



window.onload = function () {
    document.querySelector("#startBtn").addEventListener('click', () => {
        startTest();
        document.querySelector(".control-screen").classList.add('hide');

        setInterval(() => {
            second += 1;

            if (second >= 60) {
                second = 0;
                minute += 1;
            }

            let ms = (minute < 10) ? "0" + minute : minute;
            let ss = (second < 10) ? "0" + second : second;

            timeHandle.innerHTML = `${ms}:${ss}`;
        }, 1000);
    });
}