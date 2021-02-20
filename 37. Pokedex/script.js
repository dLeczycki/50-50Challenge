const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_IMG_API = 'https://pokeres.bastionbot.org/images/pokemon/';

const pokedex = document.querySelector('div.pokedex');
const limit = 100;

const cardColors = {
    grass: '#CEF5B6',
    fire: '#F5C1BE',
    bug: '#F5C08F',
    water: '#DCF5EC',
    normal: '#EAEEF4',
    electric: '#F5F4B2',
    poison: '#E29FFF',
    ground: '#F5CDA7',
    fighting: '#F56E6D',
    fairy: '#FFF383',
    rock: '#B69B83',
    ghost: '#D1B2FF',
    psychic: '#FF9CD9',
}

getPokemons();

async function getPokemons() {
    for (let i = 1; i < limit + 1; i++) {
        const pokemon = await fetch(`${POKE_API}${i}`).then(res => res.json());
        createPokemonCard(pokemon);
    }
}


function createPokemonCard(pokemonDetails) {
    const card = document.createElement('div');
    card.classList.add('poke-card');

    const id = pokemonDetails.id;
    const name = pokemonDetails.name;
    const type = pokemonDetails.types[0].type.name;

    card.innerHTML =
        `
        <div class="img">
            <img src="${POKE_IMG_API}${id}.png">
        </div>
        <p class="id">${formatID(id)}</p>
        <h2 class="name">${name}</h2>
        <p class="type">Type: ${type}</p>
        `
    card.style.backgroundColor = cardColors[type];
    pokedex.appendChild(card);
}

function formatID(id) {
    if (id < 10) id = '00' + id;
    else if (id < 100) id = '0' + id;
    id = '#' + id;
    return id;
}