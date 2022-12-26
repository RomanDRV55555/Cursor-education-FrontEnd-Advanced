function getRandomArray(length = 0, min = Number.MIN_VALUE, max = Number.MAX_VALUE){
// forEach та map не процюють з пустим масивом, тому використовується from 
// першим параметром передається пустий мисив і для кожного єлемента виконується callback з другого параметра
    return Array.from(Array(length), () => Math.round(Math.random() * (max - min) + min));    
}

function getModa(...numbers){
    let maxCount = 0;
    let resultElement;
    
    // перший параметр - елемент, дргий параметр - індекс, третій параметр - сам масив
    numbers.forEach((curElement,i,numbers)=>  {
        
        let curElCount = numbers.filter((elForFiler) => elForFiler === curElement).length;
        if (curElCount > maxCount ){
            maxCount = curElCount;
            resultElement = curElement;
        }
    } )

    return resultElement;
}


console.log(getRandomArray(5,6,9));
console.log(getModa(5,5,4,2,2,6,7,7,7));
