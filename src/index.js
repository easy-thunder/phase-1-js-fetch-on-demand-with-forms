const init = () => {

const inputForm = document.querySelector("form");

inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(r => r.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        summary.textContent = data.summary;
        title.textContent = data.title;
    }
    )
    



});


























  
}

document.addEventListener('DOMContentLoaded', init);