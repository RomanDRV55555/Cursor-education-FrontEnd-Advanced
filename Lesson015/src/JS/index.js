import Post from "./Post";
// import '../styles/styles.css'
import '../../../Lesson010/styles/styles.css'

import myPict from '../../../Lesson012/styles/img/na.png'

import {sumToPay, sumTotal} from '../../../Lesson001/JS/Lesson001_homework.js'
import {validatedNM, inputM, inputN} from '../../../Lesson002/JS/script.js'
import { formatName } from "../../../Lesson003/JS/script";
import {getPairs, getPairsThemes} from "../../../Lesson004/JS/script.js"

console.log('@homeworks');

const divPost = document.getElementById('divPost');

const posts = [];
posts.push(new Post(formatName('const'), `Import const from "../../../Lesson001/JS/Lesson001_homework.js" sumToPay = ${sumToPay}`));
posts.push(new Post(formatName('function'), `Import functions from "../../../Lesson002/JS/script.js" validatedNM(5, 7) = ${validatedNM(5, 7)}`));
posts.push(new Post(formatName('function'), 'Import formatName() from "../../../Lesson003/JS/script"'));
posts.push(new Post(formatName('function'), `Import getPairs() from "../../../Lesson004/JS/script" getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]) ${getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"])}`));


posts.push(new Post(formatName('style'), 'Import css from "./../../Lesson010/styles/styles.css"', myPict));
posts.push(new Post(formatName('pictures'), 'Import picture from "../../../Lesson012/styles/img/na.png"', myPict));

posts.forEach((curElement) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = curElement.toString();
    divPost.appendChild(newDiv);
}
);
