import React,{useState,useEffect}  from 'react';

import { FlatList, Dimensions, View, StyleSheet } from 'react-native';

import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import mocks from '../../mocks/animais'
import LoadingBar from '../../componentes/LoadingBar/index'
import { useNavigation } from '@react-navigation/native';

export default function FarmClicker()
{
    
    // useEffect(()=>{
    //     //Chamada de outras funções
    //     //console.log(login);
    //     //console.log("aaaaaaa");
    //     navigation.addListener('focus',()=>setEstado(estado))
    //      },[estado, navigation])

    //      const navigation = useNavigation()
    //      const [estado,setEstado] = useState(0);

    //     console.log("oi");
    return <>     

        <Topo dinheiro={estado}/>
        <View style={estilos.bichos}>
            <FlatList
                data={mocks.itens.lista}
                renderItem={({item})=><Animais  item={item}/>}
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