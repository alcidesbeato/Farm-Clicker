import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native';

import fundo from '../../assets/fundo.png';

const width = Dimensions.get('screen').width;

export default function Fundo({children}){
    return <>
    <Image source={fundo} style={estilos.fundo}/>
    {children}
    </>
}

const estilos = StyleSheet.create({
    fundo: {
        width: "100%",
        height: 731 / 411 * width,
        position:"absolute",
    },
})