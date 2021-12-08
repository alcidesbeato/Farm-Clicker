import React from "react";

import {Image, StyleSheet,Dimensions,Text,View} from 'react-native'

import topo from   '../../../../assets/topo.png';
import fundo from '../../../../assets/fundo.png';
import bottom from '../../../../assets/bottom.png'


const width = Dimensions.get('screen').width;

export default function Topo ()
{
    return (
    <>
        <View style={{flex:29}}>
            <Image source = {fundo} style={estilos.fundo}/>
            <View>
                <Image source = {topo}  style={estilos.fundoTopo}/>
            </View>
            
        </View>
       <View style={{flex:5}}>
            <Image source = {bottom}  style={estilos.fundoBottom}/>
       </View>
        
        
    </>
    )
}


const estilos = StyleSheet.create ({
    titulo:
    {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    },
    fundoTopo:{
        width: "100%",
        height: 150/412 * width,
        //position:"absolute",
        
    },
    fundo: {
        width: "100%",
        height: 731 / 411 * width,
        position:"absolute",
        
    },
   fundoBottom:
    {
        width: "100%",
        height: 100/279 * width,
        position:"absolute",
        

    },

})