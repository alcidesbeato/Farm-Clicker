import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {LoginNavigator} from './app.routes'

export function Routes() {
    return (
        <NavigationContainer>
            <LoginNavigator />
        </NavigationContainer>
    )
}