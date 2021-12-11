import React from 'react'

import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    botao: {
        backgroundColor: "#FFF500",
        borderRadius: 25,
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: "black",
        marginTop: height*0.01,
        marginLeft: width*0.065,
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