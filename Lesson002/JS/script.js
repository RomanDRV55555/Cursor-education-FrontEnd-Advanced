
// const N = inputN();
// const M = inputM(); 

// if (validatedNM(N,M)) {
//     const isSkipEven = confirm("Пропускати парні числа?");

//     let sum = 0;
    
//     for(i = N; i <=M; i++){
//         if (isSkipEven) {
//             if (!(i%2 === 0)){sum +=i;}
//         } else{sum +=i;}
//     }    
//     document.writeln(`<h3>Сума дорівнює ${sum}<\h3>`);
// };

function inputM() {
    let currentM = +prompt("Введіть M", 0);
    while(currentM < 0 || isNaN(currentM)){
        if (!confirm(`Введене невірне значення M - ${currentM}. Повторити введення?`)){
            break;        
        }
        currentM = +prompt("Введіть M", 0);
    }

    return currentM;
};

function inputN(){
    let currentN = -1;
    do {
        currentN = +prompt("Введіть N", 0);
        if(currentN < 0 || isNaN(currentN)) {
            if (!confirm(`Введене невірне значення N - ${currentN}. Повторити введення?`)){
                break;        
            } 
        } else { break; };
    } while(true);
    
    return currentN;
}

function validatedNM(N, M){
    let isValidated = true;

    let errText = "";

    if (N > M){
        errText +=`${N} більше ніж ${M}. `;
        isValidated = false;
    } 

    if (isNaN(N)){
        errText +=`N не є числом. `;
        isValidated = false;
    }

    if (isNaN(M)){
        errText +=`M не є числом. `;
        isValidated = false;
    }

    if (!isValidated) {
        errText +=` Обробка даних неможлива`;
        alert(errText);
    }

    return isValidated;
}

export {validatedNM, inputM, inputN}