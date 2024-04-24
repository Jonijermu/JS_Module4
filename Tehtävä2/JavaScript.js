'use strict'
async function fetchData() {

    try {
        const inputValue = document.querySelector('#query').value.toLowerCase();
        const p = document.querySelector('p')
        p.textContent = 'Check console ;D'

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    fetchData()

});