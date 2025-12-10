const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let searchPokemon = 1;



const fetchpokemon = async (pokemon) =>{
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (ApiResponse.status === 200){
  const data = await ApiResponse.json(); 
   return data;
    }
}
const renderpokemon = async (pokemon) =>{
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
    const data = await fetchpokemon(pokemon);
    if(data){
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
      const animatedGif = data.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default;
        const officialArt = data.sprites?.other?.['official-artwork']?.front_default;
        const frontDefault = data.sprites?.front_default;
        const dreamWorld = data.sprites?.other?.dream_world?.front_default;

        const imageUrl = animatedGif || officialArt || frontDefault || dreamWorld || '';

        if (imageUrl) {
            pokemonImage.src = imageUrl;
            pokemonImage.style.display = 'block';
        } else {
            pokemonImage.style.display = 'none';
        }

     input.value = '';
     searchPokemon = data.id;
     }else{
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none';
        input.value = '';
    }
    if (pokemonImage=null){
        pokemonImage.src= data['sprites']['front_default'];
    }
}
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());
});
buttonPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){
searchPokemon -= 1;
renderpokemon(searchPokemon);
    }
});
buttonNext.addEventListener('click', () =>{
searchPokemon += 1;
renderpokemon(searchPokemon);
});
renderpokemon(searchPokemon); 