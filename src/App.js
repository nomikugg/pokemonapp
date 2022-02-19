
import React, { useEffect, useState } from "react";
import PokemonThumnail from "./components/PokemonThumnail";


const App= () => {


  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async() =>{
    const res = await fetch(loadMore)
    const data = await res.json()
    //console.log(data)
    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data =  await res.json();
        setAllPokemons( currentList => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      })
    }
    createPokemonObject(data.results);
    console.log(data.results)
    //await console.log(allPokemons)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
            { allPokemons.map((pokemon, index) =>
              <PokemonThumnail
                key = {index}
                id ={pokemon.id}
                image = {pokemon.sprites.other.dream_world.front_default}
                name = {pokemon.name}
                type = {pokemon.types[0].type.name}
                />
            )}
        </div>
        <button className="load-more" onClick={()=> getAllPokemons()}>Load More</button>
      </div>
    </div>
  );
}

export default App;
