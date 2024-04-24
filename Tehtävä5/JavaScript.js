'use strict'

async function fetchData() {

    try {

        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.log(error)
    }
}

fetchData();

