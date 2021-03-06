import React from 'react'

import { TouchableOpacity, StyleSheet,Dimensions} from 'react-native';

import Texto from '../../componentes/Texto'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Botao({style,dinheiro,comprado,acao,valor}) {

  console.log(dinheiro - valor)
  
  if(comprado == 0 && (dinheiro - valor) >= 0 )
  {
  // console.log(comprado + "foi");
    return <TouchableOpacity onPress={()=>acao()} style={estilos.botao}>
      <Texto style={estilos.texto}>Buy</Texto>
    </TouchableOpacity>
  }
  else{
      return <TouchableOpacity  style={estilos.botao}>
            <Texto style={estilos.texto}>COMPRADO</Texto>
        </TouchableOpacity>
  }
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#FFF500",
        borderRadius: 25,
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: "black",
        marginTop: height*0.01,
        position: "absolute",
        marginLeft: width*0.42,
        
    },
    texto: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 32,
        marginTop: 6,
    }
})