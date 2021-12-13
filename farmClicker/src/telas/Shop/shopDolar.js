import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions,TouchableOpacity,FlatList } from 'react-native'

import Texto  from '../../componentes/Texto'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaShop from '../../../assets/folhaShop.png'
import botaoSair from '../../../assets/botaoSair.png'
import fundoSettings from '../../../assets/FundoSettings.png'
import dinheiroMarrom from '../../../assets/DinheiroMarrom.png'
import dinheiroVerde from '../../../assets/DinheiroVerde.png'
import dolarsVerde from '../../../assets/DolarsVerde.png'
import dolarsMarrom from '../../../assets/DolarsMarrom.png'
import fazendeiroMarrom from '../../../assets/FazendeirosMarrom.png'
import fazendeiroVerde from '../../../assets/FazendeirosVerde.png'
import Animais from './Upgrade'

import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import mocks from '../../mocks/animais';

export default function Shop({itens}){
    const navigation = useNavigation()
    return <View style={{flex: 1}}>
        <Fundo/>
        <MadeiraTopo/>
        <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaShop} style={estilos.folhaShop}/>
            <TouchableOpacity onPress={()=>navigation.navigate('Farm')}>
                <Image source={botaoSair} style={estilos.botaoSair}/>
            </TouchableOpacity>
        </View> 
        <Texto style={estilos.dinheiro}>
        { 
            Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
            }).format(400000)
        } </Texto>

        <View>
            <Image source={fundoSettings} style={estilos.fundoSettings}/> 
            <View style={estilos.menu}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity >
                        <Image source={dinheiroVerde} style={estilos.icones}/>
                    </TouchableOpacity>
                    <TouchableOpacity style ={{marginLeft:width*0.20}}>
                        <Image source={fazendeiroVerde} style={estilos.icones}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginLeft:width*0.18}}>
                        <Image source={dolarsMarrom} style={estilos.icones}/>
                    </TouchableOpacity>
                </View>
                <View style={estilos.opcoesCompra}>
                    <FlatList
                    data={mocks.itens.upgradeDolar}
                    renderItem={Animais}
                    keyExtractor={({nome}) => nome}
                    />
                </View>
            </View> 
        </View>
        <BottomRedondo/>
    </View>
}

const estilos = StyleSheet.create({
    folhaShop: {
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
        marginTop: 70, 
    },
    dinheiro: {
        backgroundColor: "#BFE1D1",
        fontWeight: '600',
        position: "absolute",   
        marginTop: width*0.45,
        marginLeft: height*0.05,
        fontSize: 20,
        lineHeight: 32,
        borderRadius: 25,
        width: 300,
        textAlign: "center",
    },
    menu: {
        position: "absolute",
        //backgroundColor: "blue",
        width: 300,
        height: 75,
        marginTop: width*0.275,
        marginLeft: height*0.055,
    },
    icones: {
        width: 50,
        height: 50,
        //position: "absolute",
        //backgroundColor: "grey",
        //marginTop: width*0.275,
    },
    opcoesCompra: {
        //backgroundColor: "blue",
        width: 300,
        height: 275,
        marginTop: width*0.01,
    }
})