
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', funcaoPrevent);

function funcaoPrevent(event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', funcaoPrevent2);

function funcaoPrevent2(event) {
    event.preventDefault();
}


INPUT_TEXT.addEventListener('keypress', funcaoPrevent3);

function funcaoPrevent3(event) {
    const caracter = event.key;
        if (caracter !== 'a') {
            event.preventDefault();
        }
}