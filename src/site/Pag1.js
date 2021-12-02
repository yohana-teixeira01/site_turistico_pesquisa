import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const Pag1 = () =>{
  const NomeStore = useStoreState(state => state.Nome);
  const PraiasStore = useStoreState(state => state.Praias);
  const setNomeStore = useStoreActions(state => state.setNome);
  const setPraiasStore = useStoreActions(state => state.setPraias);
  const[nome, setNome] = useState(NomeStore);
  const[texto, setTexto] = useState(PraiasStore);

  const salvar = () => {
    setNomeStore(nome);
    setPraiasStore(texto);
  }

    return (
      <div align="center" class="paginas">
        <h2>Pesquisa sobre as praias pernambucas</h2>
          <form>
            <fieldset>
              <p>Nome Completo: 
                <input type="text" name="name" value={nome} onChange={(event) => setNome(event.target.value)} />
              </p>
              <p>
                Você conhece as praias de pernambuco?
                <br/>
              </p>
                <textarea class="paginas" value={texto} onChange={(event) => setTexto(event.target.value)} placeholder=" Digite aqui...">
                </textarea>
                  <br/><br/>
                  <Link to="/Pag2" ><button onClick={salvar}>Próximo</button></Link>
            </fieldset>
          </form>
      </div>
    );
}

export default Pag1;