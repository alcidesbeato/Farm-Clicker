import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native';

import fundoLogin from '../../assets/testeFundo.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Fundo({children}){
    return <>
    <Image source={fundoLogin} resizeMode='center' style={estilos.fundoLogin}/>
    {children}
    </>
}

const estilos = StyleSheet.create({
    fundoLogin: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        marginTop: height*0.2,
    },

})