import React from 'react'

import { TouchableOpacity} from 'react-native';


import estilos from './estiloBotao';
import Texto from '../Texto';

export default function Botao({valor,style,acao}) {


  return <TouchableOpacity  onPress={acao} style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>{valor}</Texto>
  </TouchableOpacity>
}
  