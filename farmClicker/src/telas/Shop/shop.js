import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'

import Texto  from '../../componentes/Texto'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaShop from '../../../assets/folhaShop.png'
import botaoSair from '../../../assets/botaoSair.png'
import fundoSettings from '../../../assets/FundoSettings.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default function Shop(){
    return <View style={{flex: 1}}>
        <Fundo/>
        <MadeiraTopo/>
        <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaShop} style={estilos.folhaShop}/>
            <Image source={botaoSair} style={estilos.botaoSair}/>
        </View>
        <Texto style={estilos.dinheiro}>
        { 
            Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
            }).format(400000)
        }
        </Texto>
        <Image source={fundoSettings} style={estilos.fundoSettings}/>
        <BottomRedondo/>
    </View>
}

const estilos = StyleSheet.create({
    folhaShop: {
        marginTop: (height*0.03),
        marginLeft: (width*0.20),
    },
    botaoSair: {
        marginTop: 10,
        marginLeft: 10,
    },
    fundoSettings: {
        width: 400,
        height: 400,
        marginTop: 70, 
    },
    dinheiro: {
        backgroundColor: "#BFE1D1",
        fontWeight: '600',
        position: "absolute",
        marginTop: width*0.45,
        marginLeft: height*0.05,
        fontSize: 20,
        lineHeight: 32,
        borderRadius: 25,
        width: 300,
        textAlign: "center",
    }
})