import React from 'react'

import { StyleSheet,Dimensions } from 'react-native'
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    botao: {
        backgroundColor: "#A0522D",
        borderRadius: 25,
        height: 42,
        width: 96,
        marginLeft: height *0.19,
        opacity: 0.95
    },
    texto: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
    }
})