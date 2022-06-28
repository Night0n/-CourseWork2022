'use strict'

const ourDiv = document.getElementById('main');
const name = prompt(`Введіть ім'я`, '');

async function search() {
    let response = await fetch(`https://api.nationalize.io?name=${name}`);
    if (response.ok) {
        let json = await response.json();
        const countryIds = [json.country[0].country_id, json.country[1].country_id, json.country[2].country_id];
        const probabilitys = [json.country[0].probability, json.country[1].probability, json.country[2].probability];
              
    } else {
        ourDiv.innerHTML = 'Запит не виконався';
    }
}
search();