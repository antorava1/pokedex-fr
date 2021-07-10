import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import PokeDetails from './PokeDetails';

const PokeContainer = (props) => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=5');
    const {history} = props;

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
          <div className="pokemon-content" style={{"display" : "flex", "flexWrap" : "wrap"}}>
            {allPokemons.map((pokemon, index) => 
              <PokeDetails
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                ability={pokemon.abilities[0].ability.name}
                height={pokemon.height}
                weight={pokemon.weight}
                move={pokemon.moves[0].move.name}
                key={index}
                onClick={() => history.push(`/${pokemon.id}`)}
              />
            )}
          </div>
          {/* {allPokemons.map((pokemon) =>
            <Table>
              <thead>
                <tr>
                  <th># ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name}</td>
                </tr>
              </tbody>
            </Table>
          )} */}
        {/* <button type="button" class="btn btn-outline-secondary" onClick={() => getAllPokemons()} style={{"marginLeft" : "45%", "textAlign" : "center"}}>Load More</button> */}
      </div>
    )

}

export default PokeContainer;