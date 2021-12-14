import React from 'react'

import { TouchableOpacity, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';
import estilos from './estiloBotaoComprar'

export default function Botao({style,dinheiro,acao,preco,quantidade}) {
  
  console.log(dinheiro);
  if((dinheiro - preco) < 0)
  {
    return <TouchableOpacity style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>Buy</Texto>
    </TouchableOpacity>
  }
else{
  
  return <TouchableOpacity onPress={()=>acao(quantidade+1)} style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>Buy</Texto>
  </TouchableOpacity>
}
}
