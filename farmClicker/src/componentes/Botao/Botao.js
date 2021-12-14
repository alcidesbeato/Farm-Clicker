import React from 'react'

import { TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilos from './estiloBotao';
import Texto from '../Texto';

const verificaLogin = (text) =>
{ 
    var aux  = 0;
    text == "garrosm" ? aux = 1 : aux = 2;
    return aux;
}
//const Nome = navigation.getParam('Nome');
//
export default function Botao({valor,style,acao,acao2}) {

  
  //console.log(acao2);
  var teste = verificaLogin(acao2);
  //acao2 == "garros"? valor=1 : valor = 2;
  //console.log("guilherme")
  if(valor == 'Sign Up')
  {
   return( <TouchableOpacity   onPress={acao}  style={[estilos.botao,style]}>
      <Texto style={estilos.texto}>{valor}</Texto>
    </TouchableOpacity>)

  }
  if(teste == 1){  return (
          
    <TouchableOpacity   onPress={acao}  style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>{valor}</Texto>
  </TouchableOpacity>

);}
else { 
    return  <TouchableOpacity   style={[estilos.botao,style]}>
    <Texto style={estilos.texto}>{valor}</Texto>
  </TouchableOpacity>
}

}
  