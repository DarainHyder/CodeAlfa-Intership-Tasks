function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.length > 1 ? display.slice(0, -1) : '0';
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    display.innerText = display.innerText === '0' ? character : display.innerText + character;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
