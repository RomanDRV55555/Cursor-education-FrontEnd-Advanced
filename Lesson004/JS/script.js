const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5]; 

// створює пари з масиву студентів 
function getPairs(students = []){
    const arrMaleNames = students.filter((curElement) => (!(curElement[curElement.length-1] === 'а')));
    const arrFemaleNames = students.filter((curElement) => (curElement[curElement.length-1] === 'а'));

    const pairStudents = [];

    for (let i = 0; i < arrMaleNames.length; i++){
        pairStudents.push([arrMaleNames[i], arrFemaleNames[i]]);
    };

    return pairStudents;

}

// розподялє теми по парах студентів
function getPairsThemes(pairs = [], themes = []){

    const arrPairsThemes = [];

    // співставляння єлементів theme в обратному порядку 
    const numbersOfElemens = Math.min(pairs.length, themes.length);
    for (let i = 0; i< numbersOfElemens; i++){
        arrPairsThemes.push([pairs[i].join(' і '), themes[i]]);
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
        arrMarksPairs.push([curElement[0], curElement[1], Math.round(Math.random() * (5 - 1) + 1)]);
    });

    return arrMarksPairs;
}

// const pairs = getPairs(students);
// document.writeln(`Результат виклику getPairs() ${pairs} <br>`);
// console.log(pairs);

// const pairsThemes = getPairsThemes(pairs, themes);
// document.writeln(`Результат виклику getPairsThemes(pairs, themes) ${pairsThemes} <br>`);
// console.log(pairsThemes);

// const studentsMarks = getStudentsMarks(students, marks);
// document.writeln(`Результат виклику getStudentsMarks(students, marks) ${studentsMarks} <br>`);
// console.log(studentsMarks);

// const marksPairs = getMarksPairs(pairsThemes);
// document.writeln(`Результат виклику getMarksPairs(getPairsThemes(pairs, themes)) ${marksPairs} <br>`);
// console.log(marksPairs);


export {getPairs, getPairsThemes}