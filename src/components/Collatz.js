import React, { Component } from 'react'

export default class Collatz extends Component {
    state={
        lista:[]
    }


    generarLista=()=>{
       console.log(this.props.numero)
        var aux=this.props.numero;
        var lista2=[];
        do{
            if(aux%2==0){
                aux=aux/2
            }else{
                aux=(aux*3)+1
            }
            lista2.push(aux);
        }while(aux!=1)
        this.setState({
            lista:lista2
        })
    }
    componentDidMount=()=>{
        this.generarLista();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.numero!= this.props.numero){
            this.generarLista();
        }
            
       
    }

    
  render() {
    return (
      <div>
        <h1>Collatz: {this.props.numero}</h1>
        
        <ul className='list-group'>
            <li className='list-group-item active' aria-current="true">Numeros</li>
            {
                this.state.lista.map((numero,index)=>{
                    return(<li className='list-group-item' key={numero}>{numero}</li>);
                })
            }
        </ul>
       
      </div>
    )
  }
}
