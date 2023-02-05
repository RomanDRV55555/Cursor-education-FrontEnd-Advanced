const students = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
}];

function formatName(nameForFormat = ""){
    return nameForFormat.charAt(0).toUpperCase() + nameForFormat.slice(1).toLowerCase();
};

function getAverage(...numbers){

    return numbers.reduce((sum, curElemet) => {
        if (Number.isInteger(curElemet)){
            sum += curElemet;
        }
        return sum;
    })/numbers.length;
};

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

// Всі функції що вище, треба перенести туди де вони використовються //

function getSubjects(curStudent = {}){
    if ('subjects' in curStudent){
        const arrSubjects = Object.keys(curStudent.subjects);

// тут треба використати map 

        for (i=0;i<arrSubjects.length;i++){
            arrSubjects[i] = arrSubjects[i].replace('_',' ');
            arrSubjects[i] = formatName(arrSubjects[i]);
        }
        return arrSubjects;

        }

    };

function getAverageMark(curStudent = {}){
    if ('subjects' in curStudent){
        return getAverage(...Object.values(curStudent.subjects).flat()).toFixed(2);
    }
};

function getStudentInfo(curStudent = {}){
    return {
        course: curStudent['course'],
        name: curStudent['name'],
        averageMark: getAverageMark(curStudent)
    }
};

function getStudentsNames(arrStudents = []){
    return arrStudents.map(curEl => (curEl.name)).sort();
};

function getBestStudent(arrStudents = []){
    return arrStudents.find(curEl => getAverageMark(curEl) == Math.max(... arrStudents.map(curEl => (getAverageMark(curEl))))).name;
};

export function calculateWordLetters(testWord = ''){
    let acc = {};
    Array.from(new Set(testWord)).map((curEl) => (acc[curEl] = countLetter(curEl, testWord)));
    return acc;
};

// console.log('getSubjects(students[0] ',getSubjects(students[0]));

// console.log('getAverageMark(students[0]) ', getAverageMark(students[0]));

// console.log('getStudentInfo(students[0]) ', getStudentInfo(students[0]));

// console.log('getStudentsNames(students) ', getStudentsNames(students));

// console.log('getBestStudent(students) ', getBestStudent(students));

// console.log('calculateWordLetters("тест") ', calculateWordLetters("тест"));

