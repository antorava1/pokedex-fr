import React, { useState, useEffect} from 'react';
import { withNamespaces } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PokeCards from './components/Cards/PokeCards';
import i18n from './i18n';


const App = ({t}) => {

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

    // Cambio de idioma
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    // Imágenes home
    const snorlax = 'snorlax.png'
    const pikachu = 'pikachu.png'
    const jigglypuff = 'jigglypuff.png'

  return (
    <>
      <AppBar class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <h3 className= "navbar-brand">{t('Pokedex')}</h3>
            <FormGroup className="d-flex">
              <Input class="form-control me-sm-2" type="text" placeholder={t('search')} onChange = {handleSearchChange}/>
            </FormGroup>
        </div>
      </AppBar> 
      <div className="container">
        <div className="d-flex justify-content-center mt-2" style={{"height" :"80px"}}>
          <img src={pikachu} alt= {"logoPokeApi"} />
          <img src={jigglypuff} alt= {"logoPokeApi"} />
          <img src={snorlax} alt= {"logoPokeApi"} />
        </div>
        <div class="btn-group" role="group">
          <Button class="btn btn-primary btn-sm my-2 my-sm-1" onClick={() => changeLanguage('es')}>{t('esp')}</Button>
          <Button class="btn btn-secondary btn-sm my-2 my-sm-1" onClick={() => changeLanguage('en')}>{t('eng')}</Button>
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
        <button type="button" className="btn btn-secondary" onClick={() => getAllPokemons()}>{t('load more')}</button>
        </div>
      </div>
    </>
  )
}

export default withNamespaces()(App);
