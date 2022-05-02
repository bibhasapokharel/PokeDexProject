const pokeContainer = document.querySelector(`#container`);
//Using the first 150 pokemon (aka ID's objects in the pokeAPI)
const numOfPokemon = 150;

// The createPokeCard function creates a new card (aka section element) and creates a new card to the webpage inside of the div (aka pokeContainer) 
//NOte: value/argument that we will be passed in for the "pokemon" parameter will be the response received from Axios request to the PokeAPI

function createPokeCard (pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    //Setting the innerHTML of the new card using the data/object that is passed into the pokemon parameter. Also using roUpperCase method.
    pokeCard.innerHTML =`
    <div class="img-container">
    <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>`;

}

//The getPokemonData function makes an AXIOS GET request to teh PokeAPI using a specific pokemon ID/num then takes the returned data and passes it into the createPokemonCard function 
//NOTE the argument/value passed into the 'id' parameter will be a number created in the loop in the next function 

async function getPokemonData (id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData.data);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);//this is running that func  
}

// The getPokemon function loops through all the pokemon ID's from 1 to 50 and runs to getPokemonData  func for each ID
//NOTE: Using async/await on this function because the code in the getPokemonData func is asynchronous 

async function getPokemon (){
    for(i = 1; i<= numOfPokemon; i++){
       console.log(i); 
       await getPokemonData(i);//this is running that func
    }
}

//Running the gotPokemon function which runs the getPokemonDat

getPokemon();