import React, {Component} from "react";
import './Main.css';
export default class Carrinho extends Component{

    state = {
        qtd: 0,
        precoTotal: 0
    }

    adicionaProduto = (e) => {
        const preco = e.target.value;
        this.setState({
            precoTotal: preco
        });
    }

    render(){
        let precoAtual;
        let produtos = {
          nitro5: 
            {
                preco: 3600,
                quantidade: 20
            }
        }
        const {precoTotal} = this.state;
        precoAtual += Number(precoTotal);
        console.log(precoAtual);
        return(
            <div>
                <h1>Carrinho de Compras</h1>
                <table>
                    <tr>
                        <td>Acer nitro 5</td>
                        <td>3.600R$</td>
                        <td><button onClick={this.adicionaProduto} value={produtos.nitro5.preco}>ADICIONAR</button></td>
                    </tr>
                </table>
                <br/>
                <br/>
                <h2>VALOR TOTALDE DE COMPRAS: {precoAtual}</h2>
            </div>
        );
    };
}