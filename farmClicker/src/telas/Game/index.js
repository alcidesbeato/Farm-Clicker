import React from 'react';

import { FlatList, Dimensions, View, StyleSheet } from 'react-native';

import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import mocks from '../../mocks/animais'

export default function FarmClicker()
{
    
    return <>     
        <Topo/>
        <View style={estilos.bichos}>
            <FlatList
                data={mocks.itens.lista}
                renderItem={({item})=><Animais item={item}/>}
                keyExtractor={({nome}) => nome}
                contentContainerStyle={{
                 paddingBottom: 50,
             }}
            />
        </View>
        <Bottom/>
    </>
}

const estilos = StyleSheet.create({
    bichos: {
        position: "absolute",
        //backgroundColor: "#715535",
        width: 375,
        height: 475,
        marginTop: width*0.4,
        marginLeft: height*0.012,
    }
})