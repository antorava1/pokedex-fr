import React, { useState, useEffect} from 'react';
import PokeCards from './components/Cards/PokeCards';
import AppBar from '@material-ui/core/AppBar';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';


const App = () => {

    const pokeApiImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
 
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const [filter, setFilter] = useState("");

    //Lleno el botón para que se carguen de a 20
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

    //Función del Search
    const handleSearchChange = (e) => {
      setFilter(e.target.value);
    };


    useEffect(() => {
        getAllPokemons()
    }, [])


    return (
      <>
          <AppBar class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
              <h3 className= "navbar-brand">BGlobal Challenge - Pokedex</h3>
                <FormGroup className="d-flex">
                  <Input class="form-control me-sm-2" type="text" placeholder="Search" onChange = {handleSearchChange}/>
                </FormGroup>
            </div>
          </AppBar>
          
          <div className="container">
            <div className="d-flex justify-content-center mt-2">
              <img src={pokeApiImg} alt= {"logoPokeApi"} />
            </div>
            <div className="row">
              {
              allPokemons.map((pokemon, index) => 
                pokemon.name.includes(filter) &&
                <PokeCards
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  height={pokemon.height}
                  type={pokemon.types[0].type.name}
                  weight={pokemon.weight}
                  ability={pokemon.abilities[0].ability.name}
                  key={pokemon.id}
                  value={pokemon.id}
                />
              )}
            </div>
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary" onClick={() => getAllPokemons()}>Load More</button>
            </div>
          </div>
      
      </>
    )
}

export default App;
