// Змінні та типи 
// Домашне завдання 

// +++++++ для Advanced +++++++ //
let strFinal = ``;

// Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
const price1 = 15.678, price2 = 123.965, price3 = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число 
// Змінні не використовую бо за умовами завданні змінні треба використовувати не скрізь 
console.log(Math.max(price1,price2,price3));
document.writeln("<h5> Максимальна ціна "+Math.max(price1,price2,price3)+"</h5>");

strFinal = strFinal + `Максимальна ціна ${Math.max(price1,price2,price3)} <br/>`;

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(Math.min(price1, price2, price3));
document.writeln("<h5> Мінімальна ціна "+Math.min(price1, price2, price3)+"</h5>");

strFinal = strFinal + `Мінімальна ціна ${Math.min(price1, price2, price3)} <br/>`;

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму 
const sumTotal = price1 + price2 + price3;
console.log(sumTotal);
document.writeln("<h5> Вартість всіх товарів "+sumTotal+"</h5>");

strFinal = strFinal + `Вартість всіх товарів ${sumTotal} <br/>`;

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
// Округлення використовувати в МЕНЬШУ сторону. 
console.log(Math.floor(price1)+Math.floor(price2)+Math.floor(price3));
document.writeln("<h5> Вартість всіх товарів без копійок "+(Math.floor(price1)+Math.floor(price2)+Math.floor(price3))+"</h5>");

strFinal = strFinal + `Вартість всіх товарів без копійок ${Math.floor(price1)+Math.floor(price2)+Math.floor(price3)} <br/>`;

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300) 
console.log(Math.ceil((price1+price2+price3)/100)*100);
document.writeln("<h5> сума товарів "+Math.round((price1+price2+price3)/100)*100+"</h5>");

strFinal = strFinal + `Сума товарів округлена до сотень ${Math.round((price1+price2+price3)/100)*100} <br/>`;

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? 
console.log(Math.floor(price1+price2+price3)%2 === 0);

strFinal = strFinal + `Чи є сума всіх товарів (округлена в меншу сторону) парним ${Math.floor(price1+price2+price3)%2 === 0} <br/>`;

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн. 
console.log(500 - (price1+price2+price3));
document.writeln("<h5>Решта в грн. не може мати більш ніж 2 знаки після коми, тому " + (500 - (price1+price2+price3)).toFixed(2)+"</h5>");

strFinal = strFinal + `Решта ${500 - (price1+price2+price3)} <br/>`;

// Виведіть середнє значення цін, округлене до другого знаку після коми (Більш складне) 
console.log(((price1+price2+price3)/3).toFixed(2));
document.writeln("<h5> середнє значення цін "+((price1+price2+price3)/3).toFixed(2)+"</h5>");

strFinal = strFinal + `Середнє значення цін, округлене до другого знаку після коми  ${((price1+price2+price3)/3).toFixed(2)} <br/>`;

// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random). 
const randomDiscount = Math.random();
document.write("<h5> знижка = "+randomDiscount+"</h5>");

strFinal = strFinal + `Випадкова знижка ${randomDiscount} <br/>`;

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. 
const sumToPay = ((price1+price2+price3) - (((price1+price2+price3))*randomDiscount)).toFixed(2);
console.log(sumToPay);
document.write("<h5>'виведіть суму до оплати' швидше за все сумма всіх цін і є 'сума до оплати' "+sumToPay+"</h5>");

strFinal = strFinal + `Сума до сплати ${sumToPay} <br/>`;

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? 
const netCost = (price1/2) + (price2/2) + (price3/2);
const netProfit = sumToPay - netCost;
console.log(netProfit);
if (netProfit > 0 ){
    document.write("<h5> прибуток дорівнює "+netProfit+"</h5>");
} else {
    document.write("<h5> збитки дорівнюють "+netProfit+"</h5>");
}

strFinal = strFinal + `Прибуток дорівнює ${netProfit} <br/>`;


// +++++++ Advanced +++++++ //
// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду: 
// Максимальна ціна: 9999.99 
// Мінімальна ціна: 1111.11 
// Вартість всіх товарів: 1345.66 

document.write("<h4> "+strFinal+"</h4>");

