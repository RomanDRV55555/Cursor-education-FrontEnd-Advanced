function getRandomArray(length = 0, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    // forEach та map не процюють з пустим масивом, тому використовується from 
    // першим параметром передається пустий мисив і для кожного єлемента виконується callback з другого параметра
    return Array.from(Array(length), () => Math.round(Math.random() * (max - min) + min));
}

function getModa(...numbers) {
    let maxCount = 0;
    let resultElement;

    // перший параметр - елемент, дргий параметр - індекс, третій параметр - сам масив
    numbers.forEach((curElement, i, numbers) => {

        // тут можна зробити через filter, але так мені зрозуміліше 
        // через filter в getMedian
        if (Number.isInteger(curElement)) {

            let curElCount = numbers.filter((elForFiler) => elForFiler === curElement).length;
            if (curElCount > maxCount) {
                maxCount = curElCount;
                resultElement = curElement;
            }
        }
    })

    return resultElement;
}

function getAverage(...numbers){

    return numbers.reduce((sum, curElemet) => {
        if (Number.isInteger(curElemet)){
            sum += curElemet;
        }
        return sum;
    })/numbers.length;
}

function getMedian(...numbers){
    if (numbers.length === 0) {
        return null;
    }

    const numbersSorted = numbers.filter((curElement) => Number.isInteger(curElement)).sort((a, b) => a - b);
    const mid = Math.floor(numbersSorted.length / 2);

    if (!((numbers.length % 2) === 0)) {
        return numbersSorted[mid];
    } else {
        return ((numbersSorted[mid-1] + numbersSorted[mid])/2).toFixed(2);
    }
}

function filterEvenNumbers(...numbers){
    return numbers.filter((curElement) => (!((curElement%2)===0)));
}

function countPositiveNumbers(...numbers){
    return numbers.filter((curElemen) => (curElemen > 0)).length;
}

function getDividedByFive(...numbers){
    return numbers.filter((curElement) => ((curElement%5)===0));
}

function replaceBadWords(string = "", arrBadWords = ['fuck', 'shit']){

    // поки роблю так як можу, потім може шось перероблю

    const arrWords = string.split(" ");

    for (i=0; i < arrWords.length; i++){
        for(b=0; b < arrBadWords.length; b++){
            arrWords[i] = arrWords[i].replace(arrBadWords[b],new Array(arrBadWords[b].length).fill('*').join(''));
        }
    };

    return arrWords.join(' ');

}

function divideByThree(word = '') {

    const arrResult = [];

    let i = 0;
    let curSyllable = '';

    for(i=0;i<word.length;i++){
        // замість перевірки можна зробити новий масив без пробілів через filter 
        if (word[i] === ' '){
            continue;
        }
        if (curSyllable.length === 3){
            arrResult.push(curSyllable);
            curSyllable = '';
        }
        curSyllable += word[i].toLowerCase();
    }

    if (curSyllable.length>0){
        arrResult.push(curSyllable);
    }

    return arrResult;

}

// function generateCombinations(word){

// }

console.log('getRandomArray getRandomArray(5, 6, 9) ', getRandomArray(5, 6, 9));

console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ',getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ',getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 
console.log('getMedian(1, 2, 3, 4) ',getMedian(1, 2, 3, 4));
console.log('getMedian(1, 2, 3, 4, 5) ',getMedian(1, 2, 3, 4, 5));
console.log('getMedian()) ',getMedian());

console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6) ',filterEvenNumbers(1, 2, 3, 4, 5, 6));

console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6) ',countPositiveNumbers(1, -2, 3, -4, -5, 6));

console.log('getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ',getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('replaceBadWords("Are you fucking kidding?") ',replaceBadWords("Are you fucking kidding?"));
console.log('replaceBadWords("Holy shit!")) ',replaceBadWords("Holy shit!"));
console.log('replaceBadWords(\"It\'s bullshit!\") ',replaceBadWords("It's bullshit!"));

console.log('divideByThree("Commander") ',divideByThree("Commander"));
console.log('divideByThree("Co   mMaND       er") ',divideByThree("Co   mMaND       er"));
console.log('divideByThree("live") ',divideByThree("live"));


// console.log(generateCombinations("man"));
// console.log(generateCombinations("ol"));

