const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this */
function getMyTaxes(salary = 0) {
    if ('tax' in this){
        return (this.tax*salary).toFixed(2);
    }
}
    
/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
Функція повинна викликатись через call та працювати з даними через this */
function getMiddleTaxes(){
    if (('tax' in this) && ('middleSalary' in this)){
        return (this.tax*this.middleSalary).toFixed(2);
    }
}

/* 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
Функція повинна викликатись через call та працювати з даними через this */
function getTotalTaxes() {
    if (('tax' in this) && ('middleSalary' in this) && ('vacancies' in this)){
        return (this.tax*this.middleSalary*this.vacancies).toFixed(2);
    }
}

/* 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт 
виду: {salary: number, taxes: number, profit: number } кожні 10 секунд. 
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
залежності від вибраної країни та значення salary.
    profit = salary - taxes; */
function getMySalary(){
    const newObj = {};
    newObj['salary'] = Math.round(Math.random() * (2000 - 1500) + 1500);
    newObj['taxes'] = getMyTaxes.call(this, newObj.salary);
    newObj['profit'] = newObj['salary'] - newObj['taxes'];
    return newObj
}

console.log('getMyTaxes.call(ukraine, 1000) ',getMyTaxes.call(ukraine, 1000));
console.log('getMyTaxes.call(latvia, 1000) ', getMyTaxes.call(latvia, 1000));
console.log('getMyTaxes.call(litva, 1000) ', getMyTaxes.call(litva, 1000));

console.log('getMyTaxes.call(99, 1000) ',getMyTaxes.call(99, 1000));

console.log('getMiddleTaxes.call(ukraine) ',getMiddleTaxes.call(ukraine));
console.log('getMiddleTaxes.call(latvia) ', getMiddleTaxes.call(latvia));
console.log('getMiddleTaxes.call(litva) ', getMiddleTaxes.call(litva));

console.log('getMiddleTaxes.call(99) ',getMiddleTaxes.call(1000));

console.log('getTotalTaxes.call(ukraine) ',getTotalTaxes.call(ukraine));
console.log('getTotalTaxes.call(latvia) ', getTotalTaxes.call(latvia));
console.log('getTotalTaxes.call(litva) ', getTotalTaxes.call(litva));

console.log('getTotalTaxes.call(99) ',getTotalTaxes.call(1000));

/* для виводу в консоль кожні 10 секунд використайте setInterval  */
setInterval(() => {console.log('getMySalary(ukraine) ',getMySalary.call(ukraine))}, 10000);