import React from 'react';

const PokeCards = ({name, image, type}) => {
    
    return (
        <div className="poke-container">
            <div class="card border-light mb-3" style={{"width": "18rem", "textAlign": "center", "marginLeft" : "38px"}}>
                <h4 class="card-header">{name}</h4>
                <div class="card-body">
                    <img src= {image} alt= {name} style={{"max-width": "100px"}}/>
                    <h5>Type: {type}</h5>
                </div>
            </div>
        </div>
    )
}

export default PokeCards;