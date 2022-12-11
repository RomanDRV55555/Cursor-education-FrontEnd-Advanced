const strN = prompt("Введіть N");
const N = Number(strN);
if (Number.isInteger(N)){

    const strM = prompt("Введіть M");
    const M = Number(strM);
    if (Number.isInteger(M)){

        if (N <=M ){

            const isSkipEven = confirm("Пропускати парні числа?");

            let sum = 0;
            
            for(i = N; i <=M; i++){
                if (isSkipEven) {
                    if (!(i%2 === 0)){sum +=i;}
                } else{sum +=i;}
            }    

            document.writeln(`<h3>Сума дорівнює ${sum}<\h3>`);

        } else {
            alert(`${N} більше ніж ${M}. Обробка даних неможлива`);
        }
    } else {
        alert(`${strM} не є цілим числом`);
    }
} else {
    alert(`${strN} не є цілим числом`);
}
