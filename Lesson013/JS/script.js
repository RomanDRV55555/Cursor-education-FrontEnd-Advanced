
/* 
Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним
чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3
 */

function* createIdGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;
    }
}

const gen = createIdGenerator();
const curElIdGenerator = document.createElement('p');
curElIdGenerator.style.fontSize = '14px';
document.body.appendChild(curElIdGenerator);

iterId = setInterval(() => {
    curElIdGenerator.innerText = gen.next().value;
}, 500);

setTimeout(() => { clearInterval(iterId); curElIdGenerator.innerText = `The Generator was stoped at ${curElIdGenerator.innerText}`; }, 10000)

/* 
Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.
(Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою
умовою)
*/

function* newFontGenerator(fs) {

    let curFrontSize = fs;

    while (true) {
        let res = yield curFrontSize;
        if (res === 'up') {
            curFrontSize += 2;
        }
        if (res === 'down') {
            curFrontSize -= 2;
        }
    }
};

const genFontSize = newFontGenerator(14);

const btnUPKey = document.getElementById('btnUPKey');
const btnDOWNKey = document.getElementById('btnDOWNKey');

function updateSizeElements(curDirection = ''){
    let newFontSize = `${genFontSize.next(curDirection).value}px`;
    document.querySelectorAll('*').forEach(curElement => curElement.style.fontSize = newFontSize);
}

btnUPKey.addEventListener('click', () => {
    updateSizeElements('up');
});

btnDOWNKey.addEventListener('click', () => {
    updateSizeElements('down');
});
