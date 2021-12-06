import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import React from "react";

const Pag4 = () => {
    const NomeStore = useStoreState(state => state.Nome);
    const setNomeStore = useStoreActions(state => state.setNome)
    const PraiasStore = useStoreState(state => state.Praias);
    const setPraiasStore = useStoreActions(state => state.setPraias)
    const RadioStore = useStoreState(state => state.Radio);
    const setRadioStore = useStoreActions(state => state.setRadio)
    const Radio2Store = useStoreState(state => state.Radio2);
    const setRadio2Store = useStoreActions(state => state.setRadio2)
    const LugarStore = useStoreState(state => state.Lugar);
    const setLugarStore = useStoreActions(state => state.setLugar);
   

   function limpar () {
    setRadioStore('');
    setRadio2Store('');
    setNomeStore('');
    setPraiasStore('');
    setLugarStore([]);
   }

    return (
        <div align="center">
            <h2>Pesquisa sobre as praias pernambucas</h2>
            <fieldset>
                <p>
                    Nome Completo: <br/> {NomeStore}<br/><br/>
                    Você conhece as praias de pernambuco?<br/> {PraiasStore} <br/><br/>
                    Você conheceu alguma praia Pernambucana?<br/>{RadioStore} <br/><br/>
                    Qual?<br/>{Radio2Store} <br/><br/>
                    Quais suas praias favoritas? {LugarStore.map(lugar => <li>{lugar}</li>)}
                </p>
                    <br/>
                    <Link to="/Pag3"><button> Anterior </button></Link>
                    <Link to="/"><button  onClick={limpar}>Nova Pesquisa</button></Link>
                   
            </fieldset>
        </div>   
    );
}
export default Pag4;