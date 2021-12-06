import axios from 'axios';
import {useState} from 'react';
import {useQuery} from 'react-query';
import React from 'react';



       
 
 const Pag5 = () => {
  
    
 
        
        const [resultados,setresultados] = useState();

        const AxiosFunction = () =>{
            axios.get(`https://api.genderize.io?name=YohanaTeixeira`).then(dataname => 
                setresultados(dataname.data.name)
                
              )
            return resultados;
            
        }
     
        const {data} = useQuery('dataname', AxiosFunction )
        console.log(data);
  
    return (
        <div align="center">
            <h2>Resultados da Pesquisa com API</h2>
            <fieldset>
                <p>
                    Nome Completo:{data, resultados} <br/><br/>
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