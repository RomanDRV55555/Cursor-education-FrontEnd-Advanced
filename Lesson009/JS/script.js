export function getRandomColour() {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return 'rgb(' + getRandomNumber(0, 255) + ', ' + getRandomNumber(0, 255) + ', ' + getRandomNumber(0, 255) + ')';

}

/*  Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. 
    Квадрати мають розташовуватись по 5 в ряд.  */
function generateBlocks() {

    const divMain = document.createElement('div');
    divMain.id = 'divMain';
    divMain.style.display = 'flex';
    divMain.style.flexWrap = 'wrap';
    divMain.style.width = '250px';
    // divMain.style.margin = '50px auto';
    document.body.append(divMain);
    for (i = 1; i <= 25; i++) {
        let curDiv = document.createElement('div')
        curDiv.style.width = '50px';
        curDiv.style.height = '50px';
        // curDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        curDiv.style.backgroundColor = getRandomColour();
        divMain.append(curDiv);

    }
}

/* Advanced зробіть так, щоб квадрати змінювали колір раз на секунду. */
function generateBlocksInterval() {
    setInterval(() => {
        const divMain = document.getElementById('divMain');
        if (!divMain) {
            generateBlocks();
        }
        Array.from(document.getElementById('divMain').children).forEach(curEl => {
            curEl.style.backgroundColor = getRandomColour();
        });
    }
        , 1000)
}

// generateBlocks();
// generateBlocksInterval();
