// import React, { Component } from "react";
// //componentes que têm estado -> classes
// export default class Main extends Component{
//     constructor(props){
//         super(props);//construtor da classe mães
//         //defindo um estado para o meu componente
//         this.state = {
//             //tudo que mudar aqui dentro, afetará o que estou renderizando abaixo
//             novaTarefa: '',
//         }
//         //atribuindo o this da classe para o método inputMudou
//         this.inputMudou = this.inputMudou.bind(this);
//     }

//     //outra forma de se fazer, sem usar o contrutor, é usar uma arrowFunction

//     inputMudou(e){
//         //para mudar o estado, preciso usar a função do proprio React que é o setState
//         this.setState(
//             {
//                 novaTarefa: e.target.value 
//             });
//     }

//     //componentes que têm estado precisam ter o método render
//     render(){
//         const { novaTarefa } = this.state;
//         return (
//         <div className="main">
//             <h1>{novaTarefa}</h1>
//             <form action="#">
//                 <input onChange={this.inputMudou} type="text"/>
//                 <br/>
//                 <button type="submit">Enviar</button>
//             </form>
//         </div>
//        );
//     }
// }