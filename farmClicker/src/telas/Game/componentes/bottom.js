import React from 'react'

import bottom from '../../../../assets/bottom.png';

import {Image,View} from 'react-native'

import Texto from '../../../componentes/Texto'

import estilos from './estiloBottom';

export default function Bottom(){
    return <>
        <View style={{flex:5}}>
            <Image source = {bottom}  style={estilos.fundoBottom}/>
       </View>
    </>
}