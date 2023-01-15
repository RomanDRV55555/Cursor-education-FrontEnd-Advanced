
const arrRect = [];


/*  Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. 
    Квадрати мають розташовуватись по 5 в ряд.  */
function generateBlocks() {

    function getRandomColour() {

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    
        return 'rgb(' + getRandomNumber(0, 255) + ', ' + getRandomNumber(0, 255) + ', ' + getRandomNumber(0, 255) + ')';
    
    }
    
    const curCanvas = document.createElement('canvas');
    curCanvas.height = 250;
    curCanvas.width = 250;
    const ctx = curCanvas.getContext("2d");
    document.body.append(curCanvas);
    for (i = 0; i <= 5; i++) {
        for (j = 0; j <= 5; j++) {
            ctx.fillStyle = getRandomColour();
            ctx.fillRect(j*50, i*50, 50, 50);
        }
    }
    
}

generateBlocks();