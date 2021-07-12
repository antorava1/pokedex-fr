import React, {useState, useEffect} from 'react';
import PokeCards from './PokeCards';
import PokeDetails from './PokeDetails';

const PokeContainer = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=5');

    const getAllPokemons = async () => {
        const response = await fetch(loadMore)
        const data = await response.json()

            setLoadMore(data.next)

        //Creo un objeto con toda la data de los pokemones
        function createPokemonObject (result) {
            result.forEach( async (pokemon) => {
                const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await response.json()
    
                    setAllPokemons(currentList => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])



    return(
    
      <div className="pokemon-container">
        {allPokemons.map((pokemon) =>
          <PokeCards
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
        />
        )}
      <button type="button" class="btn btn-outline-secondary" onClick={() => getAllPokemons()} style={{"marginLeft" : "45%", "textAlign" : "center"}}>Load More</button>
    </div>
  )
}

export default PokeContainer;