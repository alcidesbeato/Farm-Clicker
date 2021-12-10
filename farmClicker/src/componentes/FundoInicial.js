import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native';

import fundoLogin from '../../assets/testeFundo.png';

const width = Dimensions.get('screen').width;

export default function Fundo({children}){
    return <>
    <Image source={fundoLogin} resizeMode='cover' style={estilos.fundoLogin}/>
    {children}
    </>
}

const estilos = StyleSheet.create({
    fundoLogin: {
        width: "100%",
        height: "100%",
        position: 'absolute',
    },

})