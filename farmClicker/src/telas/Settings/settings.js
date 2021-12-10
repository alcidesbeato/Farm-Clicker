import React from 'react'
import { Image, StyleSheet, View,Dimensions } from 'react-native'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaSettings from '../../../assets/folhaSettings.png'
import botaoSair from '../../../assets/botaoSair.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Settings(){
    
    return <>
    <Fundo/>
    <MadeiraTopo/>
    <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaSettings} style={estilos.folhaSettings}/>
            <Image source={botaoSair} style={estilos.botaoSair}/>
        </View>
    <BottomRedondo />
    </>
}

const estilos = StyleSheet.create({
    folhaSettings: {
        marginTop: (height*0.03),
        marginLeft: (width*0.20),
    },
    botaoSair: {
        marginTop: 10,
        marginLeft: 10,
    }
})
