const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5]; 

const pairs = getPairs();
document.writeln(`Результат виклику getPairs() ${pairs} <br>`);
console.log(pairs);

const pairsThemes = getPairsThemes(pairs, themes);
document.writeln(`Результат виклику getPairsThemes(pairs, themes) ${pairsThemes} <br>`);
console.log(pairsThemes);

const studentsMarks = getStudentsMarks(students, marks);
document.writeln(`Результат виклику getStudentsMarks(students, marks) ${studentsMarks} <br>`);
console.log(studentsMarks);

const marksPairs = getMarksPairs(pairsThemes);
document.writeln(`Результат виклику getMarksPairs(getPairsThemes(pairs, themes)) ${marksPairs} <br>`);
console.log(marksPairs);


// створює пари з масиву студентів 
function getPairs(students = []){
    const arrMaleNames = ["Олександр", "Ігор", "Олексій"];
    const arrFemaleNames = ["Олена", "Іра", "Світлана"];

    const arrPair = [];

    // приклад використання for of 
    for (let curElementFemaleNames of arrFemaleNames){
        // приклад використання indexOf
        arrPair.push([arrMaleNames[arrFemaleNames.indexOf(curElementFemaleNames)], curElementFemaleNames])
    }

    return arrPair;

}

// розподялє теми по парах студентів
function getPairsThemes(pairs = [], themes = []){

    const arrPairsThemes = [];

    // співставляння єлементів theme в обратному порядку 
    const numbersOfElemens = Math.min(pairs.length, themes.length);
    for (let i = 0; i< numbersOfElemens; i++){
        arrPairsThemes.push([pairs[i], themes[numbersOfElemens - i - 1]]);
    }

    return arrPairsThemes;
}


// розподіляє оцінки по студентах
function getStudentsMarks(students = [], marks = []){

    const arrStudentsMarks = []; 

    for (let i = 0; i<(Math.min(students.length, marks.length)); i++){
        arrStudentsMarks.push([students[i], marks[i]]);
    }

    return arrStudentsMarks;
}


// виставляє парам студентів випадкові оцинки за темах
function getMarksPairs(pairsThemes = []){

    const arrMarksPairs = [];

    // приклад використання forEach 
    pairsThemes.forEach(curElement => {
        arrMarksPairs.push([curElement, Math.round(Math.random() * (5 - 1) + 1)]);
    });

    return arrMarksPairs;
}