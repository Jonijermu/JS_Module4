'use strict'

async function fetchData() {

    try {
        const value_from_input = document.querySelector('#query').value;

        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        console.log(data);

        const results = document.querySelector('#results');
        results.innerHTML = '';


        data.result.forEach(joke => {
            const article = document.createElement('article')
            const p = document.createElement('p')

            p.textContent = joke.value;

            article.appendChild(p)

            results.appendChild(article);


        })
    } catch (error) {
        console.log(error)
    }
}


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    fetchData();

});
