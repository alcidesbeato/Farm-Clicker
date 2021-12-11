import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Texto({children, style}){
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    } else {
        if(style?.fontWeight === '600'){
            estilo = estilos.textoItalico;
        }
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratAlternatesRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratAlternatesBold",
        fontWeight: "bold",
    },
    textoItalico: {
        fontFamily: "MontserratAlternatesItalic",
        fontWeight: "600",
    }
})