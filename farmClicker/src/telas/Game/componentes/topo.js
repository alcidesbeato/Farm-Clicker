import React from "react";

import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native'

import Texto from '../../../componentes/Texto'
import Fundo from '../../../componentes/Fundo'
import MadeiraTopo from '../../../componentes/MadeiraTopo'

import estilos from './estiloTopo';

import fotoPerfil from '../../../../assets/fotoPerfil.png';
import dinheiroPago from '../../../../assets/cash.png';
import dinheiroFazendeiros from '../../../../assets/farmer.png';
import removeAd from '../../../../assets/removeAd.png'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Topo ()
{
    return (
    <>
        <View style={{flex:1}}>
            <Fundo/>
            <View>
                <MadeiraTopo/>
                <Image source = {fotoPerfil} style={estilos.fotoPerfil}/>
                <Texto style={estilos.nome}>Lucas</Texto>
                <Texto style={estilos.dinheiro}>
                { 
                    Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                    }).format(400000)
                }
                </Texto>
                <View style={estilos.cash}>
                    <Image source={dinheiroFazendeiros} style={estilos.dinheiroExtra}/>
                    <Texto style={estilos.dinheiroPagoAmarelo}>100</Texto>
                    <Image source={dinheiroPago} style={estilos.dinheiroExtra}/>
                    <Texto style={estilos.dinheiroFazendeiroVerde}>50</Texto>
                    <TouchableOpacity style={estilos.botao}>
                        <Image source={removeAd}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
    )
}