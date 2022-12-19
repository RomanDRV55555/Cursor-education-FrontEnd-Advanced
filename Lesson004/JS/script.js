const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5]; 

const pairs = getPairs();
document.writeln(`Результат виклику getPairs() ${getPairs()} <br>`);
document.writeln(`Результат виклику getPairsThemes(pairs, themes) ${getPairsThemes(pairs, themes)} <br>`);
document.writeln(`Результат виклику getStudentsMarks(students, marks) ${getStudentsMarks(students, marks)} <br>`);
// навмисно не використовую змінну
document.writeln(`Результат виклику getMarksPairs(getPairsThemes(pairs, themes)) ${getMarksPairs(getPairsThemes(pairs, themes))} <br>`);


// створює пари з масиву студентів 
function getPairs(students = []){
    const arrMaleNames = ["Олександр", "Ігор", "Олексій"];
    const arrFemaleNames = ["Олена", "Іра", "Світлана"];

    const arrPair = [];

    for (let i = 0; i < arrFemaleNames.length; i++){
        arrPair.push([arrMaleNames[i], arrFemaleNames[i]])
    }

    return arrPair;

}

// розподялє теми по парах студентів
function getPairsThemes(pairs = [], themes = []){

    const arrPairsThemes = [];

    const numbersOfElemens = Math.min(pairs.length, themes.length);
    for (let i = 0; i< numbersOfElemens; i++){
        arrPairsThemes.push([pairs[i], themes[numbersOfElemens - i - 1]]);
    }

    return arrPairsThemes;
}


// розподіляє оцінки по студентах
function getStudentsMarks(students = [], marks = []){

    const arrStudentsMarks = []; 

    for (let i = 0; i<(Math.min(students.length, themes.length)); i++){
        arrStudentsMarks.push([students[i], marks[i]]);
    }

    return arrStudentsMarks;
}


// виставляє парам студентів випадкові оцинки за темах
function getMarksPairs(pairsThemes = []){

    const arrMarksPairs = [];

    pairsThemes.forEach(curElement => {
        arrMarksPairs.push([curElement, Math.round(Math.random() * (5 - 1) + 1)]);
    });

    return arrMarksPairs;
}