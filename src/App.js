import React from 'react';
import Main from './components/Main';
import Carrinho from './components/Carrinho';
import './App.css';
export default function App() {
  // return (
  //   /*O REACT SÓ DEIXA COLOCAR MAISDE UM ELEMENTO SE ELES ESTIVEREM ENGLOBADOS POR ALGO.
  //   COMO UMA DIV OU UM FRAGMENT(TAGS VAZIAS)*/
  //   // <div>
  //   //   <h1>OlÁ, Mundo</h1>
  //   //   <p>Eae galera</p>
  //   // </div>
  // );

    return (
    <div>
      <Main />
      <Carrinho />  
    </div>
  )
  }
