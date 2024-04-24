'use strict'

async function fetchData() {

    try {
        const inputValue = document.querySelector('#query').value.toLowerCase();

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        if (!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        console.log(data)

        document.querySelector('#results').innerHTML = '';

        data.forEach(shows => {
            const article = document.createElement('article')
            const h2 = document.createElement('h2')
            const a = document.createElement('a')
            const img = document.createElement('img')
            const div = document.createElement('div')

            h2.textContent = shows.show.name;
            a.href = shows.show.url;
            a.target = '_blank';
            img.src = shows.show.image.medium || 'image not found';
            img.alt = shows.show.name;
            div.innerHTML = shows.show.summary;

            article.appendChild(h2);
            article.appendChild(a);
            article.appendChild(img);
            article.appendChild(div);

            document.querySelector('#results').appendChild(article)
        })
    } catch (error) {
        console.log(error);
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    fetchData()

});