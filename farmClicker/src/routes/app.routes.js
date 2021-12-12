import React from 'react'

import { createStackNavigator} from '@react-navigation/stack'


import Login from '../telas/Login/login' //login -> Registrar ou Farm

import Registrar from '../telas/Login/registrar' // vai para Login

import Farm from '../telas/Game/index' // Farm -> Settings,VerAD,Shop

import Shop from '../telas/Shop/shop'
import VerAd from '../telas/Ad/ad'
import Settings from '../telas/Settings/settings'




function FarmNavigator() {
    const {Navigator, Screen} = createStackNavigator()
    return (
        <Navigator initialRouteName="Farm" screenOptions={{ headerShown: false }} >
            <Screen name="Farm" component={Farm}/>
            <Screen name="Shop" component={Shop}/>
            <Screen name="VerAd" component={VerAd}/>
            <Screen name="Settings" component={Settings}/>
        </Navigator>
        )
}

export function LoginNavigator() {
    const {Navigator, Screen} = createStackNavigator()
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Screen name="Login" component={Login}/>
            <Screen name="Registrar" component={Registrar}/>
            <Screen name="FarmNavigator" component={FarmNavigator}/>
        </Navigator>
    )
}
