
const DATA = [
    [
        {
            "code": "Backquote",
            "key": "Zenkaku",
            "shift": ""
        },
        {
            "code": "Digit1",
            "key": "1",
            "shift": "!"
        },
        {
            "code": "Digit2",
            "key": "2",
            "shift": "\""
        },
        {
            "code": "Digit3",
            "key": "3",
            "shift": "#"
        },
        {
            "code": "Digit4",
            "key": "4",
            "shift": "$"
        },
        {
            "code": "Digit5",
            "key": "5",
            "shift": "%"
        },
        {
            "code": "Digit6",
            "key": "6",
            "shift": "&"
        },
        {
            "code": "Digit7",
            "key": "7",
            "shift": "\'"
        },
        {
            "code": "Digit8",
            "key": "8",
            "shift": "("
        },
        {
            "code": "Digit9",
            "key": "9",
            "shift": ")"
        },
        {
            "code": "Digit0",
            "key": "0",
            "shift": ""
        },
        {
            "code": "Minus",
            "key": "-",
            "shift": "="
        },
        {
            "code": "Equal",
            "key": "^",
            "shift": "~"
        },
        {
            "code": "IntlYen",
            "key": "\\",
            "shift": "|"
        },
        {
            "code": "Backspace",
            "key": "Backspace",
            "shift": ""
        }
    ],
    [
        {
            "code": "Tab",
            "key": "Tab",
            "shift": ""
        },
        {
            "code": "KeyQ",
            "key": "q",
            "shift": "Q"
        },
        {
            "code": "KeyW",
            "key": "w",
            "shift": "W"
        },
        {
            "code": "KeyE",
            "key": "e",
            "shift": "E"
        },
        {
            "code": "KeyR",
            "key": "r",
            "shift": "R"
        },
        {
            "code": "KeyT",
            "key": "t",
            "shift": "T"
        },
        {
            "code": "KeyY",
            "key": "y",
            "shift": "Y"
        },
        {
            "code": "KeyU",
            "key": "u",
            "shift": "U"
        },
        {
            "code": "KeyI",
            "key": "i",
            "shift": "I"
        },
        {
            "code": "KeyO",
            "key": "o",
            "shift": "O"
        },
        {
            "code": "KeyP",
            "key": "p",
            "shift": "P"
        },
        {
            "code": "BracketLeft",
            "key": "@",
            "shift": "`"
        },
        {
            "code": "BracketRight",
            "key": "[",
            "shift": "{"
        },
        {
            "code": "Enter",
            "key": "Enter",
            "shift": "Enter"
        }
    ],
    [{
        "code": "CapsLock",
        "key": "CapsLock",
        "shift": "CapsLock"
    },
    {
        "code": "KeyA",
        "key": "a",
        "shift": "A"
    },
    {
        "code": "KeyS",
        "key": "s",
        "shift": "S"
    },
    {
        "code": "KeyD",
        "key": "d",
        "shift": "D"
    },
    {
        "code": "KeyF",
        "key": "f",
        "shift": "F"
    },
    {
        "code": "KeyG",
        "key": "g",
        "shift": "G"
    },
    {
        "code": "KeyH",
        "key": "h",
        "shift": "H"
    },
    {
        "code": "KeyJ",
        "key": "j",
        "shift": "J"
    },
    {
        "code": "KeyK",
        "key": "k",
        "shift": "K"
    },
    {
        "code": "KeyL",
        "key": "l",
        "shift": "L"
    },
    {
        "code": "Semicolon",
        "key": ";",
        "shift": "+"
    },
    {
        "code": "Quote",
        "key": ":",
        "shift": "*"
    },
    {
        "code": "Backslash",
        "key": "]",
        "shift": "}"
    }
    ],
    [
        {
            "code": "ShiftLeft",
            "key": "Shift",
            "shift": "Shift"
        },
        {
            "code": "KeyZ",
            "key": "z",
            "shift": "Z"
        },
        {
            "code": "KeyX",
            "key": "x",
            "shift": "Z"
        },
        {
            "code": "KeyC",
            "key": "c",
            "shift": "C"
        },
        {
            "code": "KeyV",
            "key": "v",
            "shift": "V"
        },
        {
            "code": "KeyB",
            "key": "b",
            "shift": "B"
        },
        {
            "code": "KeyN",
            "key": "n",
            "shift": "N"
        },
        {
            "code": "KeyM",
            "key": "m",
            "shift": "M"
        },
        {
            "code": "Comma",
            "key": ",",
            "shift": ""
        },
        {
            "code": "Period",
            "key": ".",
            "shift": ""
        },
        {
            "code": "Slash",
            "key": "/",
            "shift": ""
        },
        {
            "code": "IntlRo",
            "key": "\\",
            "shift": ""
        },
        {
            "code": "ShiftRight",
            "key": "Shift",
            "shift": ""
        }
    ],
    [
        {
            "code": "Space",
            "key": " ",
            "shift": ""
        }
    ]
]

const keyMap = new Map();

function keyDown(e) {
    //console.log(e.code, e.key);
    let type = keyMap.get(e.code);
    if (type == null) {
        return;
    }
    type.classList.add('hit');

    if (e.key == "Shift") {
        DATA.forEach(row => {
            row.forEach(key => {
                //console.log(key);
                key.textHandle.innerHTML = `<p>${key.shift}</p>`;
            });

        });
    }
}

function keyUp(e) {
    let type = keyMap.get(e.code);
    if (type == null) {
        return;
    }
    type.classList.remove('hit');

    if (e.key == "Shift") {
        DATA.forEach(row => {
            row.forEach(key => {
                key.textHandle.innerHTML = `<p>${key.key}</p>`;
            });
        });
    }
}

function loadKeys() {
    for (let i = 0; i < DATA.length; i++) {

        let row = DATA[i];
        let rowHandler = document.querySelector(`#row${i + 1}`)

        for (let j = 0; j < row.length; j++) {
            let key = row[j];
            let keyHTML = document.createElement('div');
            let keyInner = document.createElement('div');
            keyHTML.className = "key";
            keyInner.innerHTML = `<p>${key.key}</p>`;
            keyHTML.appendChild(keyInner);
            rowHandler.appendChild(keyHTML);
            keyMap.set(key.code, keyHTML);
            key.textHandle = keyInner;
        }
    }
}

