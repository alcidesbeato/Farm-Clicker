import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';

import Texto from '../../componentes/Texto'
import Botao from './botao'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Upgrade ({item:{nome,imagem, preco}})
{
    return <>
        <View Key = {nome} style={estilos.item}> 
            <Image source={imagem} style = {estilos.imagem}/>
                <View style={estilos.cadaItem}>
                    <View style={estilos.detalhes}>
                        <Texto style={estilos.nome}>{nome}</Texto>
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(preco)
                        }</Texto>
                        <Botao/>  
                    </View>
                </View>
        </View>
    </> 
}

const estilos = StyleSheet.create
({
    item:
    {
        backgroundColor: "#BFE1D1",
        width: 300,
        height: 65,
        flexDirection: "column",
        marginBottom: 10,
        borderRadius: 25, 
    },
    imagem:
    {
        position: "absolute",
        width: 35,
        height: 35,
        marginLeft: 10,   
        marginTop: 10,   
    },
    cadaItem: {
        position: "absolute",
        //backgroundColor: "grey",
        width: 175,
        height: 65,
        flexDirection: "row",
        marginLeft: 50,
        borderRadius: 25, 
    },
    detalhes:{
        flexDirection: "column",
        position: "absolute",
        marginLeft: height*0.025,
    },
    nome: {
        position: "absolute",
        //backgroundColor: "green",
        //marginBottom: 10,
        height: 30,
        fontSize: 16,
        fontWeight: "bold",
    },
    preco: {
        //backgroundColor: "white",
        position: "absolute",
        height: 30,
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
        marginTop: 30,
        marginLeft: width*0.02,
    },
})