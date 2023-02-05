/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../Lesson001/JS/Lesson001_homework.js":
/*!************************************************!*\
  !*** ../../Lesson001/JS/Lesson001_homework.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sumToPay\": () => (/* binding */ sumToPay),\n/* harmony export */   \"sumTotal\": () => (/* binding */ sumTotal)\n/* harmony export */ });\n// Змінні та типи \n// Домашне завдання \n\n// +++++++ для Advanced +++++++ //\nlet strFinal = ``;\n\n// Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.\nconst price1 = 15.678,\n  price2 = 123.965,\n  price3 = 90.2345;\n\n//Використовуючи вбудований об'єкт Math – виведіть максимальне число \n// Змінні не використовую бо за умовами завданні змінні треба використовувати не скрізь \n// console.log(Math.max(price1,price2,price3));\n// document.writeln(\"<h5> Максимальна ціна \"+Math.max(price1,price2,price3)+\"</h5>\");\n\nstrFinal = strFinal + `Максимальна ціна ${Math.max(price1, price2, price3)} <br/>`;\n\n//Використовуючи вбудований об'єкт Math – виведіть мінімальне число\n// console.log(Math.min(price1, price2, price3));\n// document.writeln(\"<h5> Мінімальна ціна \"+Math.min(price1, price2, price3)+\"</h5>\");\n\nstrFinal = strFinal + `Мінімальна ціна ${Math.min(price1, price2, price3)} <br/>`;\n\n// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму \nconst sumTotal = price1 + price2 + price3;\n// console.log(sumTotal);\n// document.writeln(\"<h5> Вартість всіх товарів \"+sumTotal+\"</h5>\");\n\nstrFinal = strFinal + `Вартість всіх товарів ${sumTotal} <br/>`;\n\n// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. \n// Округлення використовувати в МЕНЬШУ сторону. \n// console.log(Math.floor(price1)+Math.floor(price2)+Math.floor(price3));\n// document.writeln(\"<h5> Вартість всіх товарів без копійок \"+(Math.floor(price1)+Math.floor(price2)+Math.floor(price3))+\"</h5>\");\n\nstrFinal = strFinal + `Вартість всіх товарів без копійок ${Math.floor(price1) + Math.floor(price2) + Math.floor(price3)} <br/>`;\n\n// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300) \n// console.log(Math.round((price1+price2+price3)/100)*100);\n// document.writeln(\"<h5> сума товарів \"+Math.round((price1+price2+price3)/100)*100+\"</h5>\");\n\nstrFinal = strFinal + `Сума товарів округлена до сотень ${Math.round((price1 + price2 + price3) / 100) * 100} <br/>`;\n\n// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? \n// console.log(Math.floor(price1+price2+price3)%2 === 0);\n// document.writeln(\"<h5> Чи є сума всіх товарів (округлена в меншу сторону) парним \" + Math.floor(price1+price2+price3) + \" \"+(Math.floor(price1+price2+price3)%2 === 0)+\"</h5>\");\n\nstrFinal = strFinal + `Чи є сума всіх товарів (округлена в меншу сторону) парним ${Math.floor(price1 + price2 + price3) % 2 === 0} <br/>`;\n\n// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн. \n// console.log(500 - (price1+price2+price3));\n// document.writeln(\"<h5>Решта в грн. не може мати більш ніж 2 знаки після коми, тому \" + (500 - (price1+price2+price3)).toFixed(2)+\"</h5>\");\n\nstrFinal = strFinal + `Решта ${500 - (price1 + price2 + price3)} <br/>`;\n\n// Виведіть середнє значення цін, округлене до другого знаку після коми (Більш складне) \n// console.log(((price1+price2+price3)/3).toFixed(2));\n// document.writeln(\"<h5> середнє значення цін \"+((price1+price2+price3)/3).toFixed(2)+\"</h5>\");\n\nstrFinal = strFinal + `Середнє значення цін, округлене до другого знаку після коми  ${((price1 + price2 + price3) / 3).toFixed(2)} <br/>`;\n\n// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random). \nconst randomDiscount = Math.random();\n// document.write(\"<h5> знижка = \"+randomDiscount+\"</h5>\");\n\nstrFinal = strFinal + `Випадкова знижка ${randomDiscount} <br/>`;\n\n// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. \nconst sumToPay = (price1 + price2 + price3 - (price1 + price2 + price3) * randomDiscount).toFixed(2);\n// console.log(sumToPay);\n// document.write(\"<h5>'виведіть суму до оплати' швидше за все сумма всіх цін і є 'сума до оплати' \"+sumToPay+\"</h5>\");\n\nstrFinal = strFinal + `Сума до сплати ${sumToPay} <br/>`;\n\n// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? \nconst netCost = price1 / 2 + price2 / 2 + price3 / 2;\nconst netProfit = sumToPay - netCost;\n// console.log(netProfit);\n// if (netProfit > 0 ){\n//     document.write(\"<h5> прибуток дорівнює \"+netProfit+\"</h5>\");\n// } else {\n//     document.write(\"<h5> збитки дорівнюють \"+netProfit+\"</h5>\");\n// }\n\nstrFinal = strFinal + `Прибуток дорівнює ${netProfit} <br/>`;\n\n// +++++++ Advanced +++++++ //\n// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду: \n// Максимальна ціна: 9999.99 \n// Мінімальна ціна: 1111.11 \n// Вартість всіх товарів: 1345.66 \n\n// document.write(\"<h4> \"+strFinal+\"</h4>\");\n\n\n\n//# sourceURL=webpack:///../../Lesson001/JS/Lesson001_homework.js?");

/***/ }),

/***/ "../../Lesson002/JS/script.js":
/*!************************************!*\
  !*** ../../Lesson002/JS/script.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputM\": () => (/* binding */ inputM),\n/* harmony export */   \"inputN\": () => (/* binding */ inputN),\n/* harmony export */   \"validatedNM\": () => (/* binding */ validatedNM)\n/* harmony export */ });\n// const N = inputN();\n// const M = inputM(); \n\n// if (validatedNM(N,M)) {\n//     const isSkipEven = confirm(\"Пропускати парні числа?\");\n\n//     let sum = 0;\n\n//     for(i = N; i <=M; i++){\n//         if (isSkipEven) {\n//             if (!(i%2 === 0)){sum +=i;}\n//         } else{sum +=i;}\n//     }    \n//     document.writeln(`<h3>Сума дорівнює ${sum}<\\h3>`);\n// };\n\nfunction inputM() {\n  let currentM = +prompt(\"Введіть M\", 0);\n  while (currentM < 0 || isNaN(currentM)) {\n    if (!confirm(`Введене невірне значення M - ${currentM}. Повторити введення?`)) {\n      break;\n    }\n    currentM = +prompt(\"Введіть M\", 0);\n  }\n  return currentM;\n}\n;\nfunction inputN() {\n  let currentN = -1;\n  do {\n    currentN = +prompt(\"Введіть N\", 0);\n    if (currentN < 0 || isNaN(currentN)) {\n      if (!confirm(`Введене невірне значення N - ${currentN}. Повторити введення?`)) {\n        break;\n      }\n    } else {\n      break;\n    }\n    ;\n  } while (true);\n  return currentN;\n}\nfunction validatedNM(N, M) {\n  let isValidated = true;\n  let errText = \"\";\n  if (N > M) {\n    errText += `${N} більше ніж ${M}. `;\n    isValidated = false;\n  }\n  if (isNaN(N)) {\n    errText += `N не є числом. `;\n    isValidated = false;\n  }\n  if (isNaN(M)) {\n    errText += `M не є числом. `;\n    isValidated = false;\n  }\n  if (!isValidated) {\n    errText += ` Обробка даних неможлива`;\n    alert(errText);\n  }\n  return isValidated;\n}\n\n\n//# sourceURL=webpack:///../../Lesson002/JS/script.js?");

/***/ }),

/***/ "../../Lesson003/JS/script.js":
/*!************************************!*\
  !*** ../../Lesson003/JS/script.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"converter\": () => (/* binding */ converter),\n/* harmony export */   \"countLetter\": () => (/* binding */ countLetter),\n/* harmony export */   \"deleteDuplicateLetter\": () => (/* binding */ deleteDuplicateLetter),\n/* harmony export */   \"deleteLetters\": () => (/* binding */ deleteLetters),\n/* harmony export */   \"formatName\": () => (/* binding */ formatName),\n/* harmony export */   \"getMaxDigit\": () => (/* binding */ getMaxDigit),\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"getRandomPassword\": () => (/* binding */ getRandomPassword),\n/* harmony export */   \"isPalyndrom\": () => (/* binding */ isPalyndrom),\n/* harmony export */   \"mathPow\": () => (/* binding */ mathPow),\n/* harmony export */   \"netSalary\": () => (/* binding */ netSalary)\n/* harmony export */ });\nfunction getMaxDigit(intNumber) {\n  if (Number.isInteger(Number(intNumber))) {\n    let maxNumber = 0;\n    let arrNumbers = intNumber.toString();\n    for (let i = 0; i < arrNumbers.length; i++) {\n      let curNumberInt = Number(arrNumbers[i]);\n      if (curNumberInt > maxNumber) {\n        maxNumber = curNumberInt;\n      }\n    }\n    return maxNumber;\n  }\n}\nfunction mathPow(num, pow) {\n  let result = num;\n  for (let i = 1; i < pow; i++) {\n    result *= num;\n  }\n  return result;\n}\nfunction formatName(nameForFormat = \"\") {\n  /* it's wrong decision\n  let newName = \"\";\n  if (typeof nameForFormat === 'string' || nameForFormat instanceof String){        \n       for (let i = 0; i < nameForFormat.length; i++){\n          if (i === 0){\n              newName += nameForFormat[i].toUpperCase();\n          } else {newName += nameForFormat[i].toLowerCase();}\n       }\n  }\n  return newName;*/\n\n  return nameForFormat.charAt(0).toUpperCase() + nameForFormat.slice(1).toLowerCase();\n}\nfunction netSalary(salaryIn) {\n  if (Number.isInteger(salaryIn)) {\n    return Math.round(salaryIn * (1 - (0.18 + 0.015)));\n  }\n}\nfunction getRandomNumber(numNIn, numMIn) {\n  if (Number.isInteger(numNIn) && Number.isInteger(numMIn)) {\n    return Math.round(Math.random() * (numMIn - numNIn) + numNIn);\n  }\n}\nfunction countLetter(letterToFind, word) {\n  let result = 0;\n  if (typeof word === \"string\" || word instanceof String) {\n    for (let i = 0; i < word.length; i++) {\n      if (word[i] == letterToFind) {\n        result++;\n      }\n    }\n  }\n  return result;\n}\nfunction converter(strSum = '') {\n  const USD_KURS = function () {\n    let currKurs = -1;\n    let ajax = new XMLHttpRequest();\n    ajax.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', false);\n    ajax.send(null);\n    if (ajax.status == 200) {\n      jsonResp = JSON.parse(ajax.response);\n      for (let i = 0; i < jsonResp.length; i++) {\n        if (jsonResp[i].cc == 'USD') {\n          currKurs = jsonResp[i].rate;\n        }\n      }\n    }\n    return currKurs;\n  }();\n  ;\n  if (strSum.indexOf(\"$\") >= 0) {\n    return (Number.parseInt(strSum.replace(\"$\", \"\")) * USD_KURS).toFixed(2) + \" UAH\";\n  } else if (strSum.indexOf(\"UAH\") >= 0 || /uah/i.test(strSum)) {\n    return (Number.parseInt(strSum.replace(\"UAH\", \"\")) / USD_KURS).toFixed(2) + \" $\";\n  } else {\n    // це не валютна сума \n    console.error(`${strSum} є невірнім параметром!`);\n    return `невідомо чому, бо ${strSum} не є валютною сумою. І це є помилка.`;\n  }\n}\nfunction getRandomPassword(numberOfSymbols = 8) {\n  result = \"\";\n  for (let i = 0; i < numberOfSymbols; i++) {\n    result += getRandomNumber(0, 9);\n  }\n  return result;\n}\nfunction deleteLetters(symbolForDelete = \"\", wordForProc = \"\") {\n  // result = \"\";\n  // for (let i=0; i < wordForProc.length; i++){\n  //     if (!wordForProc[i] === symbolForDelete){\n  //         result += wordForProc[i];\n  //     }\n  // }\n\n  // return result;\n\n  result = wordForProc;\n  while (new RegExp(symbolForDelete, \"i\").test(result)) {\n    result = result.replace(symbolForDelete, \"\");\n  }\n  return result;\n}\nfunction isPalyndrom(wordForCheck = \"\") {\n  /* it's wrong decision\n  let resultisPalyndrom = true;\n   for (let i=0; i < (wordForCheck.length/2); i++) {\n      if (!(wordForCheck[i] == wordForCheck[wordForCheck.length - i - 1])){\n          resultisPalyndrom = false;\n          break;                \n      }\n  }\n   return resultisPalyndrom;*/\n\n  return wordForCheck.split('').reverse().join('') === wordForCheck;\n}\nfunction deleteDuplicateLetter(wordForCheckDuplicate = \"\") {\n  let resultWord = wordForCheckDuplicate;\n  for (let i = 0; i < wordForCheckDuplicate.length; i++) {\n    if (countLetter(wordForCheckDuplicate[i], resultWord) > 1) {\n      resultWord = deleteLetters(wordForCheckDuplicate[i], resultWord);\n    }\n  }\n  return resultWord;\n}\n\n// const intNumber = 123424;\n// document.writeln(`Функція №1. Найбільша цифра в числі ${intNumber} це ${getMaxDigit(intNumber)} <br>`);\n// const num = 2, pow = 6;\n// document.writeln(`Функція №2. ${num} в ступіні ${pow} дорівнює ${mathPow(num,pow)} <br>`);\n// const nameForFormat = \"пАтІннСОН\";\n// document.writeln(`Функція №3. Форматує ім'я ${nameForFormat} в ${formatName(nameForFormat)} <br>`);\n// const salary = 1200;\n// document.writeln(`Функція №4. Суму, що залишається після оплати податку від зарабітньої плати ${salary} є ${netSalary(salary)} <br>`);\n// const numN = 12;\n// const numM = 34;\n// document.writeln(`Функція №5. Випадкове ціле число в діапазоні від ${numN} до ${numM} є ${getRandomNumber(numN, numM)} <br>`);\n// const letter = \"i\";\n// const word = \"classification\";\n// document.writeln(`Функція №6. Кількість букв '${letter}' в слові '${word}' дорівнює ${countLetter(letter, word)} <br>`);\n// const strSum = \"100$\";\n// document.writeln(`Функція №7. '${strSum}' дорівнює ${converter(strSum)} <br>`);\n// const  numberOfSymbols = 11;\n// document.writeln(`Функція №8. Випадковий пароль з '${numberOfSymbols}' символів буде ${getRandomPassword(numberOfSymbols)} <br>`);\n// const  wordForDelSymbol = \"expression with only six soap\";\n// const curSymbolForDel = \"s\";\n// document.writeln(`Функція №9. Речення '${wordForDelSymbol}' після видалення символа ${curSymbolForDel} буде вигладати так ${deleteLetters(curSymbolForDel, wordForDelSymbol)} <br>`);\n// const wordPalyndrom = \"excpcxe\";\n// document.writeln(`Функція №10. Чі є рядок '${wordPalyndrom}' поліндромом? ${isPalyndrom(wordPalyndrom)} <br>`);\n// const wordNonPalyndrom = \"excpncxe\";\n// document.writeln(`Функція №10. Чі є рядок '${wordNonPalyndrom}' поліндромом? ${isPalyndrom(wordNonPalyndrom)} <br>`);\n// const  curWordForCheckDuplicate = \"six sisters for seven seats\";\n// document.writeln(`Функція №11. Речення '${curWordForCheckDuplicate}' після видалення дублюючих символів буде вигладати так ${deleteDuplicateLetter(curWordForCheckDuplicate)} <br>`);\n\n//# sourceURL=webpack:///../../Lesson003/JS/script.js?");

/***/ }),

/***/ "../../Lesson004/JS/script.js":
/*!************************************!*\
  !*** ../../Lesson004/JS/script.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPairs\": () => (/* binding */ getPairs),\n/* harmony export */   \"getPairsThemes\": () => (/* binding */ getPairsThemes)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\n\n// створює пари з масиву студентів \nfunction getPairs(students = []) {\n  const arrMaleNames = students.filter(curElement => !(curElement[curElement.length - 1] === 'а'));\n  const arrFemaleNames = students.filter(curElement => curElement[curElement.length - 1] === 'а');\n  const pairStudents = [];\n  for (let i = 0; i < arrMaleNames.length; i++) {\n    pairStudents.push([arrMaleNames[i], arrFemaleNames[i]]);\n  }\n  ;\n  return pairStudents;\n}\n\n// розподялє теми по парах студентів\nfunction getPairsThemes(pairs = [], themes = []) {\n  const arrPairsThemes = [];\n\n  // співставляння єлементів theme в обратному порядку \n  const numbersOfElemens = Math.min(pairs.length, themes.length);\n  for (let i = 0; i < numbersOfElemens; i++) {\n    arrPairsThemes.push([pairs[i].join(' і '), themes[i]]);\n  }\n  return arrPairsThemes;\n}\n\n// розподіляє оцінки по студентах\nfunction getStudentsMarks(students = [], marks = []) {\n  const arrStudentsMarks = [];\n  for (let i = 0; i < Math.min(students.length, marks.length); i++) {\n    arrStudentsMarks.push([students[i], marks[i]]);\n  }\n  return arrStudentsMarks;\n}\n\n// виставляє парам студентів випадкові оцинки за темах\nfunction getMarksPairs(pairsThemes = []) {\n  const arrMarksPairs = [];\n\n  // приклад використання forEach \n  pairsThemes.forEach(curElement => {\n    arrMarksPairs.push([curElement[0], curElement[1], Math.round(Math.random() * (5 - 1) + 1)]);\n  });\n  return arrMarksPairs;\n}\n\n// const pairs = getPairs(students);\n// document.writeln(`Результат виклику getPairs() ${pairs} <br>`);\n// console.log(pairs);\n\n// const pairsThemes = getPairsThemes(pairs, themes);\n// document.writeln(`Результат виклику getPairsThemes(pairs, themes) ${pairsThemes} <br>`);\n// console.log(pairsThemes);\n\n// const studentsMarks = getStudentsMarks(students, marks);\n// document.writeln(`Результат виклику getStudentsMarks(students, marks) ${studentsMarks} <br>`);\n// console.log(studentsMarks);\n\n// const marksPairs = getMarksPairs(pairsThemes);\n// document.writeln(`Результат виклику getMarksPairs(getPairsThemes(pairs, themes)) ${marksPairs} <br>`);\n// console.log(marksPairs);\n\n\n\n//# sourceURL=webpack:///../../Lesson004/JS/script.js?");

/***/ }),

/***/ "./JS/Post.js":
/*!********************!*\
  !*** ./JS/Post.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Post = /*#__PURE__*/function () {\n  function Post(titlePost, tetxPost, img) {\n    _classCallCheck(this, Post);\n    this.title = titlePost;\n    this.text = tetxPost;\n    this.img = img;\n    this.date = new Date();\n  }\n  _createClass(Post, [{\n    key: \"toString\",\n    value: function toString() {\n      return \"<h2> \".concat(this.title, \" </h2> \\n        <p> \").concat(this.text, \" </p>\\n        <img src=\\\"\").concat(this.img, \"\\\"> </img>\\n        <p> \").concat(this.date.toJSON(), \" </p>\");\n    }\n  }]);\n  return Post;\n}();\n\n\n//# sourceURL=webpack:///./JS/Post.js?");

/***/ }),

/***/ "./JS/index.js":
/*!*********************!*\
  !*** ./JS/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./JS/Post.js\");\n/* harmony import */ var _Lesson010_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Lesson010/styles/styles.css */ \"../../Lesson010/styles/styles.css\");\n/* harmony import */ var _Lesson012_styles_img_na_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Lesson012/styles/img/na.png */ \"../../Lesson012/styles/img/na.png\");\n/* harmony import */ var _Lesson001_JS_Lesson001_homework_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Lesson001/JS/Lesson001_homework.js */ \"../../Lesson001/JS/Lesson001_homework.js\");\n/* harmony import */ var _Lesson002_JS_script_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Lesson002/JS/script.js */ \"../../Lesson002/JS/script.js\");\n/* harmony import */ var _Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Lesson003/JS/script */ \"../../Lesson003/JS/script.js\");\n/* harmony import */ var _Lesson004_JS_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Lesson004/JS/script.js */ \"../../Lesson004/JS/script.js\");\n\n// import '../styles/styles.css'\n\n\n\n\n\n\nconsole.log('@homeworks');\nvar divPost = document.getElementById('divPost');\nvar posts = [];\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('const'), \"Import const from \\\"../../../Lesson001/JS/Lesson001_homework.js\\\" sumToPay = \".concat(_Lesson001_JS_Lesson001_homework_js__WEBPACK_IMPORTED_MODULE_3__.sumToPay)));\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('function'), \"Import functions from \\\"../../../Lesson002/JS/script.js\\\" validatedNM(5, 7) = \".concat((0,_Lesson002_JS_script_js__WEBPACK_IMPORTED_MODULE_4__.validatedNM)(5, 7))));\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('function'), 'Import formatName() from \"../../../Lesson003/JS/script\"'));\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('function'), \"Import getPairs() from \\\"../../../Lesson004/JS/script\\\" getPairs([\\\"\\u041E\\u043B\\u0435\\u043A\\u0441\\u0430\\u043D\\u0434\\u0440\\\", \\\"\\u0406\\u0433\\u043E\\u0440\\\", \\\"\\u041E\\u043B\\u0435\\u043D\\u0430\\\", \\\"\\u0406\\u0440\\u0430\\\", \\\"\\u041E\\u043B\\u0435\\u043A\\u0441\\u0456\\u0439\\\", \\\"\\u0421\\u0432\\u0456\\u0442\\u043B\\u0430\\u043D\\u0430\\\"]) \".concat((0,_Lesson004_JS_script_js__WEBPACK_IMPORTED_MODULE_6__.getPairs)([\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"]))));\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('style'), 'Import css from \"./../../Lesson010/styles/styles.css\"', _Lesson012_styles_img_na_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\nposts.push(new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((0,_Lesson003_JS_script__WEBPACK_IMPORTED_MODULE_5__.formatName)('pictures'), 'Import picture from \"../../../Lesson012/styles/img/na.png\"', _Lesson012_styles_img_na_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\nposts.forEach(function (curElement) {\n  var newDiv = document.createElement('div');\n  newDiv.innerHTML = curElement.toString();\n  divPost.appendChild(newDiv);\n});\n\n//# sourceURL=webpack:///./JS/index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../../Lesson010/styles/styles.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../../Lesson010/styles/styles.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Lesson015/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Lesson015/node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Lesson015/node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/graph-paper.webp */ \"../../Lesson010/styles/img/graph-paper.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _Lesson015_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_Lesson015_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _Lesson015_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    font-size: 17px;\\n    font-family: 'Gloria Hallelujah', cursive;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") bottom center;\\n    background-size: cover;\\n    color: blue;\\n  }\\n\\n.keys {\\n    display: flex;\\n    flex: 1;\\n    min-height: 100vh;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n    \\n.key {\\n    color: blue;\\n    margin: 1rem;\\n    font-size: 1.5rem;\\n    width: 10rem;\\n  }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../../Lesson010/styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../../Lesson012/styles/img/na.png":
/*!*****************************************!*\
  !*** ../../Lesson012/styles/img/na.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"953e304e0a44de5e0088af2c2d0406b3.png\");\n\n//# sourceURL=webpack:///../../Lesson012/styles/img/na.png?");

/***/ }),

/***/ "../../Lesson010/styles/styles.css":
/*!*****************************************!*\
  !*** ../../Lesson010/styles/styles.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../Lesson015/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _Lesson015_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Lesson015_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Lesson015_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../Lesson015/node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!../../Lesson010/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_Lesson015_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_Lesson015_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _Lesson015_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_Lesson015_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_Lesson015_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _Lesson015_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_Lesson015_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Lesson015_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _Lesson015_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _Lesson015_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///../../Lesson010/styles/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "../../Lesson010/styles/img/graph-paper.webp":
/*!***************************************************!*\
  !*** ../../Lesson010/styles/img/graph-paper.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"696d479c44d44ff7fe6b.webp\";\n\n//# sourceURL=webpack:///../../Lesson010/styles/img/graph-paper.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./JS/index.js");
/******/ 	
/******/ })()
;