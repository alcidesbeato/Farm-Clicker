import React from "react";

import {Image,Dimensions,Text,View} from 'react-native'

import Texto from '../../../componentes/Texto'

import estilos from './estiloTopo';

import topo from   '../../../../assets/topo.png';
import fundo from '../../../../assets/fundo.png';
import bottom from '../../../../assets/bottom.png';
import fotoPerfil from '../../../../assets/fotoPerfil.png';
import dinheiroPago from '../../../../assets/cash.png';
import dinheiroFazendeiros from '../../../../assets/farmer.png';
import removeAd from '../../../../assets/removeAd.png'
import teste from '../../../../assets/teste.png'


const width = Dimensions.get('screen').width;

export default function Topo ()
{
    return (
    <>
        <View style={{flex:29}}>
            <Image source = {fundo} style={estilos.fundo}/>
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
       <View style={{flex:5}}>
            <Image source = {bottom}  style={estilos.fundoBottom}/>
       </View>
    </>
    )
}
