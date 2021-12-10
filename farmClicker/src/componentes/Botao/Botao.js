import React from 'react'

import { TouchableOpacity, Text } from 'react-native';


import estilos from './estiloBotao';
import Texto from '../Texto';

export default function Botao({valor,style}) {

    
  return <TouchableOpacity  style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>{valor}</Texto>
  </TouchableOpacity>
}
  