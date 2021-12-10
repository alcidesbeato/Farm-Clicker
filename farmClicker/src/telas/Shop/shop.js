import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaShop from '../../../assets/folhaShop.png'
import botaoSair from '../../../assets/botaoSair.png'

export default function Shop(){
    return <View style={{flex: 1}}>
        <Fundo/>
        <MadeiraTopo/>
        <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaShop} style={estilos.folhaShop}/>
            <Image source={botaoSair} style={estilos.botaoSair}/>
        </View>
        <BottomRedondo/>
    </View>
}

const estilos = StyleSheet.create({
    folhaShop: {
        marginTop: 25,
        marginLeft: 75,
    },
    botaoSair: {
        marginTop: 10,
        marginLeft: 15,
    }
})