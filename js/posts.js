/* metodo para solicitar dados */

/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))

*/

/* metodo para enviar dados */

let _data = {
    title: 'teste de envio',
    body: 'lorem ipsum sit dolor amet',
    userId: 5
}

const postContainer = document.getElementById('posts')
let postMarkup = ''


function getPosts(elem) {
    elem.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const postAleatorio = data[randomIndex];

            postMarkup = document.createElement('div');
            postMarkup.innerHTML = `
            <h3>${postAleatorio.title}</h3>
            <p>${postAleatorio.body}</p>
            `;

            postContainer.innerHTML = '';
            postContainer.appendChild(postMarkup)
        })
        .catch(error => console.error(error))

}

const btnConsultar = document.getElementById('btn-consultar');
btnConsultar.addEventListener('click', getPosts)
