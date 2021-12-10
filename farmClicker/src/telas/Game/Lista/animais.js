import React from 'react';
import {Image, StyleSheet, View, FlatList} from 'react-native';


export default function Animais ({item:{nome,imagem}})
{
    console.log(nome);
    return  <View Key = {nome} style={[estilos.item,{opacity:1}]}> 
                <Image source={imagem} style = {estilos.imagem}/>
        </View>
}

const estilos = StyleSheet.create
({
    item:
    {
        flexDirection: "row",
        flexWrap:"nowrap",
       paddingTop: 50,
       // marginTop:200,
        //marginHorizontal: 75,
        //justifyContent:"flex-start",
       //position:"absolute"
        
        
    },
    imagem:
    {
        
        width: 75,
        height: 75,        
        
    },
})