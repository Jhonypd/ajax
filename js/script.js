const url = 'https://api.github.com/users'
//const user = 'jhonypd'
const main = document.getElementById('main')
const userInput = document.getElementById('username')
const consultar = document.getElementById('btn-consultar')


const existCampsApi = {
    name: 'Nome',
    bio: 'Bio',
    company: 'Compania',
    public_repos: 'Repositórios',
    email: 'Email',
    location: 'Local',
}

function inputValue(input){
    return input.value.trim() === ''
}

function inputVazio(){

    if(inputValue(userInput)){
        userInput.classList.add('errorInput')
    } else {
        userInput.classList.remove('errorInput')
    }
}

function getUser(username) {
    if (inputVazio(userInput)) {
        main.innerHTML = `
                <div class="card error">
                <h3>Digite um nome de usuário e tente novamente!</h3>
            </div>`
        return
    }
    

    fetch(`${url}/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => {

            if (!response.ok) {
                return response.json().then((errorData) => {
                    main.innerHTML = `<div class="card error">
                    <h3>Verifique o nome de usuário e tente novamente!</h3>
                </div>`
                    throw new Error(`Erro ao solicitar dados: ${response.status}`)
                })
            }
            return response.json()
        })

        .then((data) => {
            console.log("Dados do usuário:", data)
            let text = ''

            for(const exist in existCampsApi) {
                const existName = existCampsApi[exist]
                const existValue = data[exist] || ''
                text +=`<p>${existName}:<span>${existValue}</span></p>`
            }

            text = data.name ? `
                    <div class="card">
                    <h3>${data.name}</h3>
                    <div class="perfil"><img src=${data.avatar_url} alt="foto_perfil"></div>
                    <div>
                        ${text}
                        <p>Username:<span>${data.login}</span></p>
                    </div>
                </div>` :
                `<div class="card error">
                <h3>Usuário não encontrado. Verifique o nome de usuário e tente novamente!</h3>
                </div>`
            main.innerHTML = text
        })
        .catch ((error) => {
    console.error('Error: ', error.message || error)
})
}




consultar.addEventListener('click', function (e) {
    e.preventDefault()
    const username = userInput.value.trim()
    console.log("valor do campo de entrada:", username)
    getUser(username)
})


