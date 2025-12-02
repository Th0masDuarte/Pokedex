const fetchpokemon = async (pokemon) =>{
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(ApiResponse);
}
fetchpokemon('25');
alert("laka")