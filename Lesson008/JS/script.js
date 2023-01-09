/* 
Необхідно створити клас Student та розробляти методи всередині цього класу. */
class Student {
    /* У стдентів повинні бути наступні властивості: university, course, fullName
    вони передаються при створенні студента(в конструктор).  */
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this._active = true;
    }

    /* Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
    метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.  */

    getInfo() {
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName} `;
    }

    /*     Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]   */
    get marks() {
        return this._active ? this._marks : null; 
    }

    /*     Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
        Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5] */

    set marks(newMark){
        if (this._active) { 
            this._marks.push(newMark);
        };    
    }    

/*     Створіть метод отримання середнього балу this.getAverageMark() -> 4.6 */
    getAverageMark() {
        return this._marks.reduce((av, curEl) => av + curEl, 0)/ (this._marks.length || 1);
    }

/*     Створіть метод this.dismiss, який "виключить" студента. 
Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
(Ніяких помилок, просто повертається завжди null замість масиву оцінок) */

    get active(){
        return this._active;
    }

    set active(curAct){
        this._active = curAct;
    } 

    dismiss() {
        this.active = false;    
    } 

/*     Створіть метод this.recover, який дозволить поновити студента */

    recover() {
        this.active = true;
    }
}

let newStudent = new Student('НАУ', 1, 'Петренко Петро Петрович', []);
console.log(newStudent.getInfo());

console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.getAverageMark());
newStudent.dismiss();
console.log(newStudent.marks);
newStudent.recover();
console.log(newStudent.marks);




