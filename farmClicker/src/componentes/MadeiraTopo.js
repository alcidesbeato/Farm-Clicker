import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function MadeiraTopo({children}){
    return <>
    <Image source={topo} style={estilos.fundo}/>
    {children}
    </>
}

const estilos = StyleSheet.create({
    fundoTopo:{
        width: "100%",
        height: 150/412 * width,
    },
})