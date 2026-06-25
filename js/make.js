

function loadLink(data) {
    try {
        const url = `./play.html?data=${data}`;
        if (typeof url === "string") {
            //window.location.href = url;
            openWindow(url);
        } else {
            console.error("Invalid URL");
        }
    } catch (err) {
        console.error("Navigation failed:", err);
    }
}

function openWindow(link) {
    try {
        // Opens the link in a new tab
        window.open(link, "_blank", "noopener,noreferrer");
    } catch (error) {
        console.error("Failed to open a new tab:", error);
    }
}

window.onload = function () {
    loadKeys();

    let testBtn = document.querySelector('#testBtn');
    let textArea = document.querySelector('#textarea');


    testBtn.addEventListener('click', () => {
        console.log(textArea.value);
        loadLink(textArea.value);
    });

}

window.addEventListener("keydown", (e) => {
    keyDown(e);
});

window.addEventListener("keyup", (e) => {
    keyUp(e);
});


/*



const url = new URL('http://www.example.com/?product=trousers&color=black&newuser&size=s');
const params = new URLSearchParams(url.search);
const product = params.get('product'); // "trousers"
const color = params.get('color'); // "black"
const size = params.get('size'); // "s"
console.log(product, color, size);

const params = new URLSearchParams(window.location.search);
const product = params.get('product');
const color = params.get('color');
const size = params.get('size');
console.log(product, color, size);

    window.location.href = "https://example.com";


*/