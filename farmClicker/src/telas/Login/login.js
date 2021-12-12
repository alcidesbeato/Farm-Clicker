import React from 'react'
import { Image, View, TextInput, Alert} from 'react-native'

import FundoInicial from '../../componentes/FundoInicial'
import Madeira from'../../../assets/madeira.png';
import iconeLogin from'../../../assets/iconeLogin.png';
import titulo from'../../../assets/titulo.png';

import { useNavigation } from '@react-navigation/native';

import Botao from '../../componentes/Botao/Botao'

import estilos from './estiloLogin';

export default function Login(){
    const navigation = useNavigation()
    return <>
        <FundoInicial/>
        <Image source={titulo} style={estilos.titulo}/>
        <View style={estilos.view}>
            <Image source={Madeira} style={estilos.madeira}/>
            <Image source={iconeLogin} style={estilos.iconeLogin}/>
            <View style={estilos.textos}>
                <TextInput
                    placeholder='Login' style={estilos.textInput}
                />
                <TextInput
                    placeholder='Password' secureTextEntry style={[estilos.textInput,{marginTop:15}]}
                />
                <View style={estilos.viewBotao}>  
                    <Botao valor='Enter' acao={()=>navigation.navigate('FarmNavigator')}></Botao>
                    <Botao valor='Sign Up' style = {{marginTop:10}} acao={()=>navigation.navigate('Registrar')} />
                </View>
            </View>
        </View>
        
    </>
}


