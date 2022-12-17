function getMaxDigit(intNumber){
    if (Number.isInteger(Number(intNumber))){
        let maxNumber = 0;
        let arrNumbers = intNumber.toString();
        for(let i = 0; i < arrNumbers.length; i++){
            let curNumberInt = Number(arrNumbers[i]);
            if (curNumberInt > maxNumber) {
                maxNumber = curNumberInt;
            }
        }
        return maxNumber;
    }
}

function mathPow(num, pow){
    let result = num;
    for (let i = 1; i < pow; i++){
        result *= num;       
    }
    return result;
}

function formatName(nameForFormat){
    let newName = "";
    if (typeof nameForFormat === 'string' || nameForFormat instanceof String){        
         for (let i = 0; i < nameForFormat.length; i++){
            if (i === 0){
                newName += nameForFormat[i].toUpperCase();
            } else {newName += nameForFormat[i].toLowerCase();}
         }
    }
    return newName;
}

function netSalary(salaryIn){
    if (Number.isInteger(salaryIn)){
        return Math.round(salaryIn*(1 - (0.18+0.015)));
    }
} 

function getRandomNumber(numNIn, numMIn){
    if (Number.isInteger(numNIn) && Number.isInteger(numMIn)) {
        return Math.round(Math.random() * (numMIn - numNIn) + numNIn);
    }
}

function countLetter(letterToFind, word){
    let result = 0;

    if ((typeof word === "string" || word instanceof String)){
        for (let i = 0; i < word.length; i++){
            if (word[i] == letterToFind){
                result ++;
            }
        }
    }

    return result;
}

const intNumber = 123424;
document.writeln(`Функція №1. Найбільша цифра в числі ${intNumber} це ${getMaxDigit(intNumber)} <br>`);
const num = 2, pow = 6;
document.writeln(`Функція №2. ${num} в ступіні ${pow} дорівнює ${mathPow(num,pow)} <br>`);
const nameForFormat = "пАтІннСОН";
document.writeln(`Функція №3. Форматує ім'я ${nameForFormat} в ${formatName(nameForFormat)} <br>`);
const salary = 1200;
document.writeln(`Функція №4. Суму, що залишається після оплати податку від зарабітньої плати ${salary} є ${netSalary(salary)} <br>`);
const numN = 12;
const numM = 34;
document.writeln(`Функція №5. Випадкове ціле число в діапазоні від ${numN} до ${numM} є ${getRandomNumber(numN, numM)} <br>`);
const letter = "i";
const word = "classification";
document.writeln(`Функція №6. Кількість букв '${letter}' в слові '${word}' дорівнює ${countLetter(letter, word)} <br>`);



