/*function changeLetter(letter) {
    tester.textContent = letter;
}

let currentSize = 15;
function changeFontSize(delta) {
    currentSize = currentSize + delta;
    if (currentSize < 5) {
        currentSize = 5;
    }
    tester.style.fontSize = `${currentSize}px`;

    console.log(currentSize);
}*/

let size = 20;
function feed(eat) {
    size = size + eat;
    if (size > 50) {
        organism.textContent = 'mooore!!!';
        organism.style.color = 'blue';
    }
    if (size > 80) {
        organism.textContent = 'even mooorree!!!';
        organism.style.color = 'pink';
    }
    if (size > 100) {
        organism.textContent = 'im so fullll!!!!!';
        organism.style.color = 'orange';
    }
    if (size > 130) {
        organism.textContent = 'wait stop';
        organism.style.color = 'red';
    }
    if (size > 160) {
        organism.textContent = 'im gonna explodeeee!!!!';
        organism.style.color = 'magenta';
    }
    if (size > 170) {
        organism.textContent = '';
    }
    organism.style.fontSize = `${size}px`;
}
