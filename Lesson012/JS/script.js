const BASE_API = 'https://swapi.dev/api/';

const GENDER = { 'male': './styles/img/m.png', 'female': './styles/img/f.png', 'hermaphrodite': './styles/img/h.jpeg', 'n/a': './styles/img/na.png' };

let postW = '';

// тут обробляється запит, формуються повідомлення про помилки запиту та інше  
async function getrequestResult(strRequest = '') {
    if (!(strRequest == '')) {
        const curRequest = await fetch(strRequest.concat(postW));
        if (curRequest.status == 200) {
            try {
                const resultJson = await curRequest.json();
                return resultJson;
            } catch (error) {
                alert(`Помилка перекладу ${error}`);
            }
        }
    }
}

// отримує списко персонажів і формує таблицю персонажів
function getCaharacters(swCharacters) {

    // таблиця вже є
    const CharactersTable = document.getElementById('CharactersTable');
    CharactersTable.replaceChildren();

    // заголовок таблиці
    const captionCharactersTable = document.createElement('caption');
    captionCharactersTable.textContent = 'CHARACTERS';
    CharactersTable.appendChild(captionCharactersTable);

    if (swCharacters) {
        swCharacters.forEach(element => {
            getrequestResult(element).then(curCharacter => {
                const trLine = document.createElement('tr');

                const tdName = document.createElement('td');
                tdName.textContent = curCharacter.name;
                tdName.classList.add('yellowText');
                trLine.appendChild(tdName);

                const tdbirth_year = document.createElement('td');
                tdbirth_year.textContent = curCharacter.birth_year;
                tdbirth_year.classList.add('yellowText');
                trLine.appendChild(tdbirth_year);

                const tdgender = document.createElement('td');
                tdgender.innerHTML = `<img src=${GENDER[curCharacter.gender]} width='15' height='15'>`;
                tdgender.classList.add('TD');
                trLine.appendChild(tdgender);

                CharactersTable.append(trLine);

            })
        })
    }


}

// виводить в таблицю по дві планети 
function showPlanets2() {

    // запиняемось на останньому шматку 
    if (curPositionlistPlanets < listPlanets.length) {
        const divPlanets = document.getElementById('divPlanets');
        divPlanets.replaceChildren();

        const PlanetTable = document.createElement('table');
        PlanetTable.classList.add('TABLE');
        divPlanets.appendChild(PlanetTable);

        // заголовок таблиці
        const captionPlanetTable = document.createElement('caption');
        captionPlanetTable.textContent = 'PLANETS';
        PlanetTable.appendChild(captionPlanetTable);

        i = 0;

        while (curPositionlistPlanets < listPlanets.length) {
            const element = listPlanets[curPositionlistPlanets];
            const trLine = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.textContent = element.name;
            tdName.classList.add('TD');
            trLine.appendChild(tdName);

            const tdInfo = document.createElement('td');
            tdInfo.classList.add('TD');
            trLine.appendChild(tdInfo);

            const textInfo = document.createElement('textarea');
            textInfo.classList.add('borderStyleInfo');
            textInfo.value = JSON.stringify(element, true, 4);
            tdInfo.appendChild(textInfo);

            PlanetTable.appendChild(trLine);

            i++;
            curPositionlistPlanets++;
            if (i === 2) {
                break;
            }
        }

        divPlanets.appendChild(btnNextPlanetListButtom);
    }
}

// отримує список планет і викликає формування таблиці планет
async function getPlanets(swPlanets) {
    if (swPlanets) {
        for (const element of swPlanets) {
            await addPlanet(element);
        }
    }

    showPlanets2();

    async function addPlanet(curElement) {
        await getrequestResult(curElement).then(curPlanet => {
            listPlanets.push(curPlanet);
        }
        )
    }
}

// ініціалізація 
let listPlanets = [];
let curPositionlistPlanets = 0;
let episodeNumberValue = '5';

const btnGetInfo = document.getElementById('btnGetInfo');
const episodeNumber = document.getElementById('episodeNumber');
const btnSlider = document.getElementById('btnSlider');
const btnSliderInpit = document.getElementById('btnSliderInpit');

document.getElementById('episodeNumber').value = episodeNumberValue;

// створюємо елемент тут тому що тут буде прослуховування
// потім його просто дадамо в потрібне місце
const btnNextPlanetListButtom = document.createElement('button');
btnNextPlanetListButtom.textContent = 'NEXT';
btnNextPlanetListButtom.classList.add('buttomStyle1');

// оновлює дані
function updateAll() {
    listPlanets = [];
    curPositionlistPlanets = 0;

    getrequestResult(`${BASE_API}films/${episodeNumberValue}/`).then(
        curFilm => {
            getCaharacters(curFilm.characters);
            getPlanets(curFilm.planets);
        });
}

// прослуховувачі

btnGetInfo.addEventListener('click', () => {
    updateAll();
});

episodeNumber.addEventListener('input', (e) => {
    episodeNumberValue = e.target.value;
})

btnNextPlanetListButtom.addEventListener('click', () => {
    showPlanets2();
})

btnSliderInpit.addEventListener('input', (e, bbb) => {
    postW = (postW == '') ? '?format=wookiee' : '';
    updateAll()
});