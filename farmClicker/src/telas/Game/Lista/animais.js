import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Texto from '../../../componentes/Texto'
import BotaoComprar from '../componentes/botaoComprar'
import LoadingBar from '../../../componentes/LoadingBar/index'


export default function Animais ({item:{nome,imagem, preco, quantidade}})
{
    return <>
        <View Key = {nome} style={[estilos.item,{opacity:1}]}> 
            <Image source={imagem} style = {estilos.imagem}/>
            <View style={{flexDirection:"row"}}>
                <LoadingBar style={{marginLeft: -50}}/>
                <BotaoComprar/>
                <Texto style={estilos.preco}>{
                        Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                        }).format(preco)
                    }</Texto>
            </View>
        </View>
        <Texto style={estilos.quantidade}>{quantidade}</Texto>
    </> 
}

const estilos = StyleSheet.create
({
    item:
    {
        flexDirection: "row",
        flexWrap:"nowrap",
        paddingTop: 50,
        marginLeft: 10,
    },
    imagem:
    {
        width: 75,
        height: 75,        
    },
    quantidade: {
        backgroundColor: "#D3D3D3",
        borderColor: "black",
        textAlign: "center",
        borderWidth: 2,
        padding: 5,
        borderRadius: 25,
        width: 75,
        height: 35,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 18,
    },
    preco: {
        height: 30,
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 45,
    }
})