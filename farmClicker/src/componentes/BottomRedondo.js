import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native';

import bottomRedondo from '../../assets/bottomRedondo.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function BottomRedondo({children}){
    return <>
    <Image source={bottomRedondo} style={estilos.bottomRedondo}/>
    {children}
    </>
}

const estilos = StyleSheet.create({
    bottomRedondo:{
        position: "absolute",
        width:"100%",
        height: 78/285 * width,
        bottom: -2,
    },
})