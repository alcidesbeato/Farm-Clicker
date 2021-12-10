import React from 'react'
import { Text, View } from 'react-native'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'

export default function Shop(){
    return <View style={{flex: 1}}>
        <Fundo/>
        <MadeiraTopo/>
        <BottomRedondo/>
    </View>
}