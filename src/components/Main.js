import React, { Component } from "react";
import './Main.css';
//componentes que têm estado -> classes
export default class Main extends Component{
    state = {
        //tudo que mudar aqui dentro, afetará o que estou renderizando abaixo
        novaTarefa: '',
    }

    //outra forma de se fazer, sem usar o contrutor, é usar uma arrowFunction
    handleChange = (e) => {
        //para mudar o estado, preciso usar a função do proprio React que é o setState
        this.setState(
            {
                novaTarefa: e.target.value 
            });
    }

    //componentes que têm estado precisam ter o método render
    render(){
        const { novaTarefa } = this.state;
        return (
        <div className="main">
            <h1>Lista de tarefas</h1>
            <form action="#">
                <input onChange={this.handleChange} type="text"/>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
       );
    }
}