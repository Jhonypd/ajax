/* metodo para solicitar dados */

/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'GET',
    headers:{
        'Content-Type' : 'application/json; charset=UTF-8'
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

const postContainer = document.getElementById('post')
let postMakup = ''

function setPost(data) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}


function getPost() {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            data.map(function(post) {
                postMakup += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
            })
            postContainer.innerHTML = postMakup
        })
        .catch(error => console.error(error))
}



