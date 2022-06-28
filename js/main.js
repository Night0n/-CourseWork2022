'use strict'

const ourDiv = document.getElementById('main');
const name = prompt(`Введіть ім'я`, '');

async function search() {
    let response = await fetch(`https://api.nationalize.io?name=${name}`);
    if (response.ok) {
        let json = await response.json();
        const countryIds = [json.country[0].country_id, json.country[1].country_id, json.country[2].country_id];
        const probabilitys = [json.country[0].probability, json.country[1].probability, json.country[2].probability];

        for(let i = 0; i < probabilitys.length; i++) {
            probabilitys[i] = (probabilitys[i]*100).toFixed(1);
        }         
          
        const output1 = codesCountry[countryIds[0]] ? `${codesCountry[countryIds[0]]} з ймовірністю:${probabilitys[0]}%;</br>` : ``;
        const output2 = codesCountry[countryIds[1]] ? `${codesCountry[countryIds[1]]} з ймовірністю:${probabilitys[1]}%;</br>` : ``;
        const output3 = codesCountry[countryIds[2]] ? `${codesCountry[countryIds[2]]} з ймовірністю:${probabilitys[2]}%</br>` : ``;
        
    } else {
        ourDiv.innerHTML = 'Запит не виконався';
    }
}
search();