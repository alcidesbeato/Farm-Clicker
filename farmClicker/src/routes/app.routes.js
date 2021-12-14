import React from 'react'

import { createStackNavigator} from '@react-navigation/stack'


import Login from '../telas/Login/login' //login -> Registrar ou Farm

import Registrar from '../telas/Login/registrar' // vai para Login

import Farm from '../telas/Game/index' // Farm -> Settings,VerAD,Shop

import Shop from '../telas/Shop/shop'
import ShopFazendeiro from '../telas/Shop/shopFazendeiro'
import ShopDolar from '../telas/Shop/shopDolar'
import VerAd from '../telas/Ad/ad'
import Settings from '../telas/Settings/settings'

function FarmNavigator({login}) {
    //console.log(login);
    const verificaLogin = (login) =>
    {
        console.log("foi");
        login = "garros" ? alert("logado") : alert("erro");
    }
    const {Navigator, Screen} = createStackNavigator()
    return (
        <Navigator initialRouteName="Farm" screenOptions={{ headerShown: false }} >
            <Screen name="Farm" component={Farm}/>
            <Screen name="Shop" component={Shop}/>
            <Screen name="VerAd" component={VerAd}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="ShopDolar" component={ShopDolar}/>
            <Screen name="ShopFazendeiro" component={ShopFazendeiro}/>
        </Navigator>
        )
}

export function LoginNavigator() {
    const {Navigator, Screen} = createStackNavigator()
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Screen name="Login" component={Login}/>
            <Screen name="Registrar" component={Registrar}/>
            <Screen name="Farm" component={Farm}/>
            <Screen name="Shop" component={Shop}/>
            <Screen name="VerAd" component={VerAd}/>
            <Screen name="Settings" component={Settings}/>
            <Screen name="ShopDolar" component={ShopDolar}/>
            <Screen name="ShopFazendeiro" component={ShopFazendeiro}/>

        </Navigator>
    )
}
