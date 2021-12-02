import {action} from 'easy-peasy';

export const store2 = {
    Nome:'',
    Praias:'',
    Radio:'',
    Radio2:'',
    Lugar:[],

    setNome:action((state, payload) => {state.Nome = payload}),
    setPraias:action((state, payload) => {state.Praias = payload}),
    setRadio:action((state, payload) => {state.Radio = payload}),
    setRadio2:action((state, payload) => {state.Radio2 = payload}),
    setLugar:action((state, payload) => {state.Lugar = payload})
}

