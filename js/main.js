'use strict'

const ourDiv = document.getElementById('main');
const name = prompt(`Введіть ім'я`, '');

async function search() {
    let response = await fetch(`https://api.nationalize.io?name=${name}`);
    if (response.ok) {
        let json = await response.json();
        const countryId1 = json.country[0].country_id;
        const probability1 = json.country[0].probability;
        const countryId2 = json.country[1].country_id;
        const probability2 = json.country[1].probability;
        const countryId3 = json.country[2].country_id;
        const probability3 = json.country[2].probability;
    } else {
        ourDiv.innerHTML = 'Запит не виконався';
    }
}
search();