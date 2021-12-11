import React from 'react';

import { FlatList, Dimensions, View, StyleSheet } from 'react-native';

import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function FarmClicker({itens})
{
    return <>     
        <Topo/>
        <View style={estilos.bichos}>
            <FlatList
                data={itens.lista}
                renderItem={Animais}
                keyExtractor={({nome}) => nome}
                //style={{marginTop: '37.5%'}}
                //contentContainerStyle={{
            //     paddingBottom: 10 + itens.lista.length * (100/279 * width) / 10
            // }}
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
        height: 425,
        marginTop: width*0.4,
        marginLeft: height*0.012,
    }
})