import React, {useState} from 'react';
import PokeModal from '../Modal/PokeModal';

const PokeCards = ({id, name, image, height, type, weight, ability}) => {
    const [openModal, setOpenModal] = useState(false);    
    return (

        <div className="col-md-3" key={id}>
            <div className="card m-3">
                <div className="card-img-top d-flex justify-content-center align-items-center" style={{'height':"200px"}}>
                    <img src={image} alt={name} className="w-75 h-50"/>
                </div>
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <h5 className="card-text text-center">#0{id}</h5>
                <button onClick={() => setOpenModal(true)} className="btn btn-primary btn-sm" style={{"marginLeft" : "4%"}}>pokemon details</button>
            </div>
            {openModal && 
                <PokeModal 
                    closeModal={setOpenModal} 
                    pokemonName={name} 
                    pokemonId={id} 
                    pokemonImg={image} 
                    pokemonHeight={height} 
                    pokemonType={type}
                    pokemonWeight={weight}
                    pokemonAbility={ability}
                    />}
                    
            </div>
        </div>
    )
}

export default PokeCards;