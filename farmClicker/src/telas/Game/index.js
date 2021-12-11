import React from 'react';

import { FlatList, Dimensions } from 'react-native';

import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'

const width = Dimensions.get('screen').width;

export default function FarmClicker({itens})
{
    return <>
            
        <Topo/>
        <FlatList
            data={itens.lista}
            renderItem={Animais}
            keyExtractor={({nome}) => nome}
            style={{marginTop: '37.5%'}}
            contentContainerStyle={{
                paddingBottom: 10 + itens.lista.length * (100/279 * width) / 10
            }}
        />

        <Bottom/>
    </>
}