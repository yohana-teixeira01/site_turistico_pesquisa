import axios from 'axios';
import { useStoreState } from 'easy-peasy';
import {useQuery} from 'react-query';
import React from 'react';

 const Pag5 = () => {
    const NomeStore = useStoreState(state => state.Nome);
    const AxiosFunction = () =>{
        return axios.get(`https://api.genderize.io?name=${NomeStore}`).then(res => res.data);
    }

    const {data, isLoading} = useQuery(`dataname:${NomeStore}`, AxiosFunction )
    console.log(data);

    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <div align="center">
            <h2>Resultados da Pesquisa com API</h2>
            <fieldset>
                <p>
                    Nome Completo:{data?.name} <br/><br/>
                    Sexo:{data?.gender} <br/><br/>
                    Você conhece as praias de pernambuco?<br/>
                    Você conheceu alguma praia Pernambucana?<br/><br/>
                    Qual?<br/><br/>
                    Quais suas praias favoritas? 
                </p>
                    <br/>
            </fieldset>
        </div>   
    );
}
export default Pag5;
