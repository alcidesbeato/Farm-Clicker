import React from 'react'
import { Image, View, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

import botaoSair from '../../../assets/botaoSair.png'

export default function VerAd(){
    
    return <>
    <TouchableOpacity onPress={()=>navigation.navigate('Farm')}>
        <Image source={botaoSair} style={estilos.botaoSair}/>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botaoSair: {
        marginTop: 10,
        marginLeft: 10,
    },
})
