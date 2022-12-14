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
    for (let i = 1; i <= pow; i++){
        result *= num;       
    }
    return result;
}



document.writeln(`Функція №1. Найбільша цифра в числі 123424 це ${getMaxDigit(123424)} <br>`);
document.writeln(`Функція №2. ${2} в ступіні ${4} дорівнює ${mathPow(2,4)}`);
