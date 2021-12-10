import React from 'react'

import bottom from '../../../../assets/bottom.png';

import {Image,View, Dimensions} from 'react-native'

import Texto from '../../../componentes/Texto'

import estilos from './estiloBottom';
const height = 100/279 * Dimensions.get('screen').width;

export default function Bottom(){
    return (
        <View style={{position: 'absolute', bottom: 0, right: 0, width: '100%', height: height}}>
            <Image source={bottom} width={'100%'} height={'100%'} style={estilos.fundoBottom} />
       </View>
    )
}