import React from 'react'
import { Image, StyleSheet, View,Dimensions, TouchableOpacity } from 'react-native'

import Texto from '../../componentes/Texto'
import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaSettings from '../../../assets/folhaSettings.png'
import botaoSair from '../../../assets/botaoSair.png'
import fundoSettings from '../../../assets/FundoSettings.png'
import Termos from '../../../assets/termo.png'
import Exit from '../../../assets/exit.png'
import on from '../../../assets/on.png'
import off from '../../../assets/off.png'
import Music from '../../../assets/MUSIC.png'
import Sound from '../../../assets/SOUND.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Settings(){
    
    return <>
    <Fundo/>
    <MadeiraTopo/>
    <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaSettings} style={estilos.folhaSettings}/>
            <TouchableOpacity>
                <Image source={botaoSair} style={estilos.botaoSair}/>
            </TouchableOpacity>
    </View>
    <Image source={fundoSettings} style={estilos.fundoSettings}/>
    <Texto style={estilos.music}>MUSIC</Texto>
    <TouchableOpacity style={estilos.on}>
        <Image source={on}/>
    </TouchableOpacity>
    <Texto style={estilos.sound}>SOUND</Texto>
    <TouchableOpacity style={estilos.off}>
        <Image source={off}/>
    </TouchableOpacity>
    <TouchableOpacity  style = {estilos.termo}>
        <Image source={Termos} />
    </TouchableOpacity>
    <TouchableOpacity  style = {estilos.exit}>
        <Image source={Exit} />
    </TouchableOpacity>
    <Texto style={estilos.playerID}>Player ID: 298129</Texto>
    <BottomRedondo/>
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
    },
    fundoSettings: {
        width: 400,
        height: 400,
        marginTop: 40, 
    },
    termo:{
        position:"absolute",
        marginTop:width*0.9,
        backgroundColor: "red",
        marginLeft:height * 0.15,
    },
    exit: {
        position:"absolute",
        marginTop:width*1.20,
        backgroundColor: "red",
        marginLeft:height * 0.185,
    },
    playerID: {
        fontWeight: "600",
        fontSize: 16,
        backgroundColor: "white",
        marginLeft: width*0.05,
        marginTop: height*0.01,
        width: 250,
    },
    on: {
        position:"absolute",
        marginTop:width*0.6,
        backgroundColor: "red",
        marginLeft:height * 0.25,
    },
    off: {
        position:"absolute",
        marginTop:width*0.75,
        backgroundColor: "red",
        marginLeft:height * 0.25,
    },
    music: {
        position:"absolute",
        marginTop:width*0.615,
        backgroundColor: "grey",
        marginLeft:height * 0.1,
        fontWeight: "bold",
        fontSize: 18, 
    },
    sound: {
        position:"absolute",
        marginLeft:height * 0.1,
        backgroundColor: "grey",
        marginTop:width*0.765,
        fontWeight: "bold",
        fontSize: 18, 
    }
})
