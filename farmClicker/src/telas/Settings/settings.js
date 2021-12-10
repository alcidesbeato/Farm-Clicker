import React from 'react'
import { Text } from 'react-native'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'

export default function Settings(){
    return <>
    <Fundo/>
    <MadeiraTopo/>
    <Text>Settings</Text>
    <BottomRedondo />
    </>
}
