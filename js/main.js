
const image = document.querySelector('.figure__image')
const caption = document.querySelector('.figure__image-caption')
const loading = document.querySelector('.loading')

const url = 'https://pokeapi.co/api/v2/pokemon'

getPokemon()

async function getPokemon() {
    
    removePekemo()
    loading.classList.remove('display-none')


    const idRandom = Math.floor( Math.random() * 151 ) 

    const resp = await fetch(`${url}/${idRandom}`)
    const {name, sprites} = await resp.json()

    setTimeout(() => {
        loading.classList.add('display-none')
        addNewPokemon(name, sprites.other.dream_world.front_default)
    }, 1000);


}    


function removePekemo() {
    image.classList.add('display-none')
    caption.classList.add('display-none')
    caption.textContent = ''
    image.src = ''
}

function addNewPokemon(name, url) {
    caption.textContent = name
    image.src = url
    image.classList.remove('display-none')
    caption.classList.remove('display-none')
}