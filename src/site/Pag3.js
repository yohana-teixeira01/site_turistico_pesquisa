import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const Pag3 = () => {
    const LugarStore = useStoreState(state => state.Lugar);
    const setLugarStore = useStoreActions(state => state.setLugar)
    const[Lugar, setLugar] = useState(LugarStore)

    function salvar(lugar){
        if(Lugar.includes(lugar)){
            setLugar(Lugar.filter(generoa => generoa!== lugar))
        } else {
            setLugar([...Lugar, lugar])
        }
    }

    function salvar2(){
        setLugarStore(Lugar);
      }

    console.log(Lugar)
    return (
        <div align="center" class="paginas">
            <h2>Pesquisa sobre as praias pernambucas</h2>
            <fieldset>
                <p>
                    Quais suas praias favoritas?
                    <br/><br/>
                    Fernando De Noronha<input type="checkbox" checked={Lugar.includes("FernandoDeNoronha")} value="FernandoDeNoronha" onClick={() => salvar("FernandoDeNoronha")}/>
                    <br/>
                    Porto De Galinhas<input type="checkbox" checked={Lugar.includes("PortoDeGalinhas")} value="PortoDeGalinhas" onClick={() => salvar("PortoDeGalinhas")} />
                    <br/>
                    Calhetas <input type="checkbox" checked={Lugar.includes("Calhetas")} value="Calhetas" onClick={() => salvar("Calhetas")} />
                    <br/>
                    Serrambi <input type="checkbox" checked={Lugar.includes("Serrambi")} value="Serrambi"  onClick={() => salvar("Serrambi")} />
                    <br/>
                    Marragogi <input type="checkbox" checked={Lugar.includes("Marragogi")} value="Marragogi" onClick={() => salvar("Marragogi")} />
                    <br/>
                </p>
                    <br/><br/>
                    <Link to="/Pag2"><button  onClick={salvar2}>Anterior</button></Link>
                    <Link to="/Pag4"><button onClick={salvar2}>Próximo</button></Link>
            </fieldset>
        </div>
    );
}
export default Pag3;