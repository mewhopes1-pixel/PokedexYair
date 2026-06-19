async function obtenerPokemon(nombre){
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );
    const data = await respuesta.json();

    document.getElementById("pokemon").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>
    `;
} catch (error) {     
       console.error('Error al obtener el Pokémon:', error);
    }
}
obtenerPokemon(document.getElementById('pokemonName').value);
