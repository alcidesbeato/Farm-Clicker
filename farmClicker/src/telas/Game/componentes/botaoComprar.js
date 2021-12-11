import React from 'react'

import { TouchableOpacity, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';
import estilos from './estiloBotaoComprar'

export default function Botao({style}) {

  return <TouchableOpacity  style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>Buy</Texto>
  </TouchableOpacity>
}
