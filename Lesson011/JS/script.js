/* Функція getRandomChinese(length) повинна повернути рядок довжиною (length) з
китайськими ієрогліфами. Час роботи проміса має складати length * 50ms. */

async function getRandomChinese(length = 0) {

    let strResult = '';
    for (i = 1; i <= length; i++) {
        strResult += String.fromCharCode(Date.now().toString().slice(-5));
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    return strResult;
};

getRandomChinese(10).then(resolve => {
    document.writeln(` <h5> getRandomChinese(10) ${resolve} </h5>`);
    console.log(resolve);
}
);
