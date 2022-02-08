const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonByIdOrName(pokemonId) {
    const url = `${BASE_URL}/pokemon/${pokemonId}/`;
    //зaпланувати запрос
    return fetch(url)
        .then(response => response.json());
}

export default { fetchPokemonByIdOrName };
