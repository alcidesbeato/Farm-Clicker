import React from 'react'

import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    botao: {
        backgroundColor: "#D3D3D3",
        borderRadius: 25,
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: "black",
        marginTop: width*0.1,
    },
    texto: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 32,
    }
})