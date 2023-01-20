/* Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш
та відтворювати унікальний звук для кожної клавіши */

document.addEventListener('keyup', (eventParameters) => {
    const curKeyElement = document.querySelector(`#key${eventParameters.keyCode}`);
    const curSoundElement = document.querySelector(`#sound${eventParameters.keyCode}`);
    if (curSoundElement){
        curSoundElement.pause();
        curKeyElement.style.color = 'blue';
    }
})

document.addEventListener('keydown', (eventParameters) => {
    const curKeyElement = document.querySelector(`#key${eventParameters.keyCode}`);
    const curSoundElement = document.querySelector(`#sound${eventParameters.keyCode}`);
    if (curSoundElement){
        curSoundElement.play();
        curKeyElement.style.color = 'red';
    }
})