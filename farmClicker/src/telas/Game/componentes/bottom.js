import React from 'react'

import bottom from '../../../../assets/bottom.png';
import iconeSettings from '../../../../assets/iconeSettings.png'
import iconeShop from '../../../../assets/iconeShop.png'
import iconeAd from '../../../../assets/iconeAd.png'

import { useNavigation } from '@react-navigation/native';
import {Image,View, Dimensions, TouchableOpacity} from 'react-native'

import Texto from '../../../componentes/Texto'

import estilos from './estiloBottom';

const height = 100/279 * Dimensions.get('screen').width;

export default function Bottom({params,dinheiro}){

    params[10] = dinheiro;
    const navigation = useNavigation()
    return (
        <View style={{position: 'absolute', bottom: 0, right: 0, width: '100%', height: height}}>
            <Image source={bottom} width={'100%'} height={'100%'} style={estilos.fundoBottom} />
            <View style={estilos.viewIcones}>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <Image source={iconeSettings} style={estilos.icones}/>
                    </TouchableOpacity>
                    <Texto style={estilos.texto}>Settings</Texto>
                </View>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Shop',{vet:params})}>
                        <Image source={iconeShop} style={estilos.icones}/>
                    </TouchableOpacity>
                    <Texto style={estilos.texto}>Shop</Texto>
                </View>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity  onPress={()=>navigation.navigate('VerAd')}>
                        <Image source={iconeAd} style={estilos.icones}/>
                    </TouchableOpacity>
                    <Texto style={estilos.texto}>2x Profit!</Texto>
                </View>
            </View>
       </View>
    )
}