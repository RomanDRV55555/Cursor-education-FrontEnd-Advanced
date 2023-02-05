import Post from "./Post";
// import '../styles/styles.css'
import '../../../Lesson010/styles/styles.css'

import myPict from '../../../Lesson012/styles/img/na.png'

import {sumToPay, sumTotal} from '../../../Lesson001/JS/Lesson001_homework.js'
import {validatedNM, inputM, inputN} from '../../../Lesson002/JS/script.js'
import { formatName } from "../../../Lesson003/JS/script";
import {getPairs, getPairsThemes} from "../../../Lesson004/JS/script.js"
import {getAverage} from "../../../Lesson005/JS/script.js"
import {calculateWordLetters} from "../../../Lesson006/JS/script.js"
import {litva} from "../../../Lesson007/JS/script.js"
import {BudgetStudent} from "../../../Lesson008/JS/script.js"
import {getRandomColour} from "../../../Lesson009/JS/script.js"
// в 10 уроці нема шо експортувати, тому з нього берется css
import {getRandomChinese} from "../../../Lesson011/JS/script.js"
// з 12 уроку берется картинка 
// з 13 уроку нічого не беру, тому що він ще не зданий 

// Розкоментувати для перевірки 
// console.log(calculateWordLetters('dfsafsdf'));
// console.log(litva);
// console.log(new BudgetStudent('MIT',5,'Sam Smith'));
// console.log(getRandomColour());
// getRandomChinese(5).then(resolve => console.log(resolve));

const divPost = document.getElementById('divPost');

const posts = [];
posts.push(new Post(formatName('const from 001'), `Import const from "../../../Lesson001/JS/Lesson001_homework.js" sumToPay = ${sumToPay}`));
posts.push(new Post(formatName('function from 002'), `Import functions from "../../../Lesson002/JS/script.js" validatedNM(5, 7) = ${validatedNM(5, 7)}`));
posts.push(new Post(formatName('function from 003'), 'Import formatName() from "../../../Lesson003/JS/script"'));
posts.push(new Post(formatName('function from 004'), `Import getPairs() from "../../../Lesson004/JS/script" getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]) ${getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"])}`));
posts.push(new Post(formatName('function from 005'), `Import getAverage() from "../../../Lesson005/JS/script" getAverage(4,5,6,2,34) ${getAverage(4,5,6,2,34)}`));

posts.push(new Post(formatName('style from 010'), 'Import css from "./../../Lesson010/styles/styles.css"', myPict));
posts.push(new Post(formatName('pictures from 012'), 'Import picture from "../../../Lesson012/styles/img/na.png"', myPict));

posts.forEach((curElement) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = curElement.toString();
    divPost.appendChild(newDiv);
}
);
