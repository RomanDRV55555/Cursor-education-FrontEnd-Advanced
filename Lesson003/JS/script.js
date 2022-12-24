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

function formatName(nameForFormat = ""){
    /* it's wrong decision
    let newName = "";
    if (typeof nameForFormat === 'string' || nameForFormat instanceof String){        
         for (let i = 0; i < nameForFormat.length; i++){
            if (i === 0){
                newName += nameForFormat[i].toUpperCase();
            } else {newName += nameForFormat[i].toLowerCase();}
         }
    }
    return newName;*/

    return nameForFormat.charAt(0).toUpperCase() + nameForFormat.slice(1).toLowerCase();
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

function converter(strSum = ''){

    const USD_KURS = (function (){
        let currKurs = -1;
        let ajax=new XMLHttpRequest();
        ajax.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', false);
        ajax.send(null);
        if(ajax.status == 200) {
            jsonResp = JSON.parse(ajax.response);
            for(let i=0; i<jsonResp.length;i++){
                if (jsonResp[i].cc == 'USD'){
                    currKurs = jsonResp[i].rate;
                }
            }
        }    
    
        return currKurs;
    }());
    
;

    if (strSum.indexOf("$") >=0 ){
        return ((Number.parseInt(strSum.replace("$", "")) * USD_KURS).toFixed(2)) + " UAH";
    } else if (strSum.indexOf("UAH") >= 0 || /uah/i.test(strSum)) { 
        return ((Number.parseInt(strSum.replace("UAH", "")) / USD_KURS).toFixed(2)) + " $";
    } else { 
        // це не валютна сума 
        console.error(`${strSum} є невірнім параметром!`);
        return `невідомо чому, бо ${strSum} не є валютною сумою. І це є помилка.`; 

    }
    
}

function getRandomPassword(numberOfSymbols = 8){
    result = "";

    for (let i = 0; i<numberOfSymbols; i++){
        result += getRandomNumber(0, 9);
    }

    return result;
}

function deleteLetters(symbolForDelete = "", wordForProc = ""){

    // result = "";
    // for (let i=0; i < wordForProc.length; i++){
    //     if (!wordForProc[i] === symbolForDelete){
    //         result += wordForProc[i];
    //     }
    // }

    // return result;

    result = wordForProc;
    while(new RegExp(symbolForDelete, "i").test(result)){
        result = result.replace(symbolForDelete,"")
    }

    return result;
} 

function isPalyndrom(wordForCheck = ""){

    /* it's wrong decision
    let resultisPalyndrom = true;

    for (let i=0; i < (wordForCheck.length/2); i++) {
        if (!(wordForCheck[i] == wordForCheck[wordForCheck.length - i - 1])){
            resultisPalyndrom = false;
            break;                
        }
    }

    return resultisPalyndrom;*/

    return wordForCheck.split('').reverse().join('') === wordForCheck;

}

function deleteDuplicateLetter(wordForCheckDuplicate = ""){

    let resultWord = wordForCheckDuplicate;

    for (let i = 0; i < wordForCheckDuplicate.length; i++){
        if (countLetter(wordForCheckDuplicate[i],resultWord) > 1){
            resultWord = deleteLetters(wordForCheckDuplicate[i],resultWord);
        }
    }

    return resultWord;
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
const strSum = "100$";
document.writeln(`Функція №7. '${strSum}' дорівнює ${converter(strSum)} <br>`);
const  numberOfSymbols = 11;
document.writeln(`Функція №8. Випадковий пароль з '${numberOfSymbols}' символів буде ${getRandomPassword(numberOfSymbols)} <br>`);
const  wordForDelSymbol = "expression with only six soap";
const curSymbolForDel = "s";
document.writeln(`Функція №9. Речення '${wordForDelSymbol}' після видалення символа ${curSymbolForDel} буде вигладати так ${deleteLetters(curSymbolForDel, wordForDelSymbol)} <br>`);
const wordPalyndrom = "excpcxe";
document.writeln(`Функція №10. Чі є рядок '${wordPalyndrom}' поліндромом? ${isPalyndrom(wordPalyndrom)} <br>`);
const wordNonPalyndrom = "excpncxe";
document.writeln(`Функція №10. Чі є рядок '${wordNonPalyndrom}' поліндромом? ${isPalyndrom(wordNonPalyndrom)} <br>`);
const  curWordForCheckDuplicate = "six sisters for seven seats";
document.writeln(`Функція №11. Речення '${curWordForCheckDuplicate}' після видалення дублюючих символів буде вигладати так ${deleteDuplicateLetter(curWordForCheckDuplicate)} <br>`);
