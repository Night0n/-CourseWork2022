'use strict'

const ourDiv = document.getElementById('main');
const name = prompt(`Введіть ім'я`, '');

async function search() {
    let response = await fetch(`https://api.nationalize.io?name=${name}`);

}
search();