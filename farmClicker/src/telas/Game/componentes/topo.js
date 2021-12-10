import React from "react";

import {Image, Text, View} from 'react-native'

import Texto from '../../../componentes/Texto'
import Fundo from '../../../componentes/Fundo'

import estilos from './estiloTopo';

import topo from   '../../../../assets/topo.png';
import fundo from '../../../../assets/fundo.png';
import fotoPerfil from '../../../../assets/fotoPerfil.png';
import dinheiroPago from '../../../../assets/cash.png';
import dinheiroFazendeiros from '../../../../assets/farmer.png';
import removeAd from '../../../../assets/removeAd.png'


export default function Topo ()
{
    return (
    <>
        <View style={{flex:29}}>
            <Fundo/>
            <View>
                <Image source = {topo}  style={estilos.fundoTopo}/>
                <Image source = {fotoPerfil} style={estilos.fotoPerfil}/>
                <Text style={estilos.nome}>Lucas</Text>
                <Text style={estilos.dinheiro}>
                { 
                    Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                    }).format(400000)
                }
                </Text>
                <View style={estilos.cash}>
                    <Image source={dinheiroFazendeiros} style={estilos.dinheiroExtra}/>
                    <Text style={estilos.dinheiroPagoAmarelo}>100</Text>
                    <Image source={dinheiroPago} style={estilos.dinheiroExtra}/>
                    <Text style={estilos.dinheiroFazendeiroVerde}>50</Text>
                    <Image source={removeAd} style={estilos.removeAd}/>
                </View>
                
            </View>
        </View>
    </>
    )
}
