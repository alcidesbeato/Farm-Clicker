import React from 'react'

import bottom from '../../../../assets/bottom.png';
import iconeSettings from '../../../../assets/iconeSettings.png'
import iconeShop from '../../../../assets/iconeShop.png'
import iconeAd from '../../../../assets/iconeAd.png'

import {Image,View, Dimensions} from 'react-native'

import Texto from '../../../componentes/Texto'

import estilos from './estiloBottom';

const height = 100/279 * Dimensions.get('screen').width;

export default function Bottom(){
    return (
        <View style={{position: 'absolute', bottom: 0, right: 0, width: '100%', height: height}}>
            <Image source={bottom} width={'100%'} height={'100%'} style={estilos.fundoBottom} />
            <View style={estilos.viewIcones}>
                <View style={{flexDirection:"column"}}>
                    <Image source={iconeSettings} style={estilos.icones}/>
                    <Texto style={estilos.texto}>Settings</Texto>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Image source={iconeShop} style={estilos.icones}/>
                    <Texto style={estilos.texto}>Shop</Texto>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Image source={iconeAd} style={estilos.icones}/>
                    <Texto style={estilos.texto}>2x Profit!</Texto>
                </View>
            </View>
       </View>
    )
}