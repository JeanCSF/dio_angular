const createElement = (elementName, attributes) => {
    const element = document.createElement(elementName);
    const attributesAsArray = Object.entries(attributes);

    attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value));

    return element;
}

function convertPokemonToLi(pokemon) {
    const pokemonLi = createElement('li', {
        class: `pokemon ${pokemon.type}`
    });

    const pokemonNumber = createElement('span', {
        class: 'number'
    });
    pokemonNumber.textContent = `#00${pokemon.number}`;
    pokemonLi.appendChild(pokemonNumber);

    const pokemonName = createElement('span', {
        class: 'name'
    });
    pokemonName.textContent = pokemon.name;
    pokemonLi.appendChild(pokemonName);

    const pokemonDetails = createElement('div', {
        class: 'detail'
    });

    const pokemonTypes = createElement('ol', {
        class: 'types'
    });

    pokemon.types.map((type) => {
        const pokemonType = createElement('li', {
            class: 'type'
        });
        pokemonType.textContent = type;
        pokemonTypes.appendChild(pokemonType);
    });

    const pokemonImage = createElement('img', {
        src: pokemon.photo,
        alt: pokemon.name
    });
    
    pokemonDetails.appendChild(pokemonTypes);
    pokemonDetails.appendChild(pokemonImage);
    pokemonLi.appendChild(pokemonDetails);

    return pokemonLi;
}

const pokemonContainer = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonList.map((pokemon) => {
        const newPokemon = convertPokemonToLi(pokemon);
        pokemonContainer.appendChild(newPokemon);
    });

});