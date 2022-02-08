import '../css/common.css';

import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

    //
    const form = e.currentTarget;
    //доступ до input з name="query"
    const searchQuery = form.elements.query.value;

    API.fetchPokemonByIdOrName(searchQuery)
        .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(() => form.reset());
}


function renderPokemonCard(pokemon) {
        const markup = pokemonCardTpl(pokemon);
        console.log(markup);

        //після того як зробили розмітку
        refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
    alert('Opoos, we do not find this pokemon');
}


//==================================

//pokemon?limit=100&offset=200 - квері стрінг/параметри запроса


//==================================

fetch('https://pixabay.com/api/?key=25615179-bc6a5ca344d9399e59b708cec&q=cat+flowers&image_type=photo')
    .then(r => r.json())
    .then(console.log);


//=================================

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
    headers: {
        Authorization: '4330ebfabc654a6992c2aa792f3173a3',
    },
};

fetch(url, options)
    .then(r => r.json())
    .then(console.log);