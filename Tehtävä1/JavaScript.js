'use strict'

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //get the value entered into the input field
    const inputValue = document.getElementById('query').value;

    //send a request using fetch
     fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
       .then(response => response.json())
       .then((data =>{
         console.log(data);
     })
       
})
