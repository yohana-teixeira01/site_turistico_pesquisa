import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Pag2 = () => {
  const RadioStore = useStoreState(state => state.Radio);
  const setRadioStore = useStoreActions(state => state.setRadio)
  const Radio2Store = useStoreState(state => state.Radio2);
  const setRadio2Store = useStoreActions(state => state.setRadio2)
  const[radio, setRadio] = useState(RadioStore);
  const[radio2, setRadio2] = useState(Radio2Store);

   function salvar(){
    setRadioStore(radio);
    setRadio2Store(radio2);
   }

    return (
      <div align="center" class="paginas">
        <h2>Pesquisa sobre as praias pernambucas</h2>
          <fieldset class="paginas">
            <p>
              <br/>
              Você conheceu alguma praia Pernambucana?
              <br/><br/> 
              <input type="radio" value="Sim" checked={radio === "Sim"} onChange={(event) => setRadio(event.target.value)} name="option" /> Sim
              <input type="radio" value="Não" checked={radio === "Não"} onChange={(event) => setRadio(event.target.value)} name="option" /> Não
              <br/><br/>
            </p>
              {radio === "Sim" &&  
                <p>
                  <br/>
                  Qual?
                  <br/><br/>
                  <input type="radio" value="FernandoDeNoronha" checked={radio2 === "FernandoDeNoronha"} onChange={(event) => setRadio2(event.target.value)} name="option1" /> FernandoDeNoronha
                  <input type="radio" value="PortoDeGalinhas" checked={radio2 === "PortoDeGalinhas"} onChange={(event) => setRadio2(event.target.value)} name="option1" /> PortoDeGalinhas
                  <input type="radio" value="Calhetas" checked={radio2 === "Calhetas"} onChange={(event) => setRadio2(event.target.value)} name="option1" /> Calhetas
                  <br/><br/>
                </p>
               }
                 <Link to="/"><button> Anterior </button> </Link>
                 <Link to="/Pag3"><button  onClick={salvar}>Próximo </button></Link>
         </fieldset>
      </div>
    );
}
export default Pag2;