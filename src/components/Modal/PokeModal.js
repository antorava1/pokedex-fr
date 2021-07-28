import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Button from '@material-ui/core/Button';
import './Modal.css';


function PokeModal({closeModal, pokemonName, pokemonId, pokemonImg, pokemonHeight, pokemonType, pokemonWeight, pokemonAbility}) {
    return(

        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                
                <Modal isOpen={true}>
                        <ModalHeader className="modal-header" style={{display: 'block'}}>
                            <Button className="btn-close btn-outline-dark" style={{float: 'right'}} onClick={() => closeModal(false)}/>
                            <h5 className="modal-title">{pokemonName} #0{pokemonId}</h5>
                        </ModalHeader> 
                            <ModalBody className="modal-body">   
                                <div>
                                    <img src= {pokemonImg} alt= {"pokemon img"} style={{"maxWidth": "75px", "margin-top" : "center"}}/>
                                    
                                </div>                       
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="height">Height</label>
                                        <input className="form-control" type="number" name="height" id="height" readOnly value={pokemonHeight}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="type">Type</label>
                                            {pokemonType === "grass" ?
                                                <input className="form-control grass" type="text" name="type" id="type" readOnly value={pokemonType}/> : ""}
                                            {pokemonType  === "fire" ?
                                            <input className="form-control fire" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "normal" ?
                                            <input className="form-control normal" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "fighting" ?
                                            <input className="form-control fighting" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "flying" ?
                                            <input className="form-control flying" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "poison" ?
                                            <input className="form-control poison" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "ground" ?
                                            <input className="form-control ground" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "rock" ?
                                            <input className="form-control rock" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "bug" ?
                                            <input className="form-control fighting" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "ghost" ?
                                            <input className="form-control ghost" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType=== "steel" ?
                                            <input className="form-control steel" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "water" ?
                                            <input className="form-control water" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "electric" ?
                                            <input className="form-control electric" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "psychic" ?
                                            <input className="form-control psychic" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "ice" ?
                                            <input className="form-control ice" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "dragon" ?
                                            <input className="form-control dragon" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "fairy" ?
                                            <input className="form-control fairy" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "shadow" ?
                                            <input className="form-control shadow" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                            {pokemonType === "unknown" ?
                                            <input className="form-control unknown" type="text" name="type" id="type" readOnly value={pokemonType}/> : "" }
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="weight" className="">Weight</label>
                                        <input className="form-control" type="number" name="weight" id="weight" readOnly value={pokemonWeight}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="abilities" className="">Abilities</label>
                                        <input className="form-control" type="text" name="abilities" id="abilities" readOnly value={pokemonAbility}/>
                                    </div>
                                </div>
                            </ModalBody>
                    </Modal>
                </div>
            </div>
        </div>
    )
};
        
export default PokeModal;