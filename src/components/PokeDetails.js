import React from 'react';

const PokeDetails = ({name, image, type, ability, height, weight, move}) => {
    
    return (
        <div className="poke-container">
            <div class="card border-light mb-3" style={{"width": "18rem", "textAlign": "center", "marginLeft" : "38px"}}>
                <h4 class="card-header">{name}</h4>
                <div class="card-body">
                    <img src= {image} alt= {name} style={{"max-width": "100px"}}/>
                    <h5>Ability: {ability}</h5>
                    <h5>Type: {type}</h5>
                    <h5>Height: {height}</h5>                
                    <h5>Weight: {weight}</h5>
                    <h5>Move: {move}</h5>
                </div>
            </div>
        </div>
    )
}

export default PokeDetails;