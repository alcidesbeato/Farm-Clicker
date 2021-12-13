import React,{useState,useEffect}  from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Texto from '../../../componentes/Texto'
import BotaoComprar from '../componentes/botaoComprar'
import LoadingBar from '../../../componentes/LoadingBar/index'



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default function Animais ({item:{nome,imagem, preco, quantidade,time}},{acao})
{
    const navigation = useNavigation()
    const [estado,setEstado] = useState(true);

     useEffect(()=>{
        //Chamada de outras funções
        //console.log(login);
        //console.log("aaaaaaa");
        navigation.addListener('focus',()=>setEstado(estado))
        
         },[estado, navigation])

  
    
     aux = () =>
     {
         //console.log(estado);
         setEstado(!estado);
     }
     
    // console.log(acao);
     //console.log("aqui");
    return <>
          <View Key = {nome} style={estilos.item}> 
            <Image source={imagem} style = {estilos.imagem}/>
            <View style={estilos.cadaItem}>
                <BotaoComprar/>
                <Texto style={estilos.quantidade}>{quantidade}</Texto> 
                  <LoadingBar  time={time} setEstado={()=>aux()} />    
                 <Texto style={estilos.preco}>{
                        Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                        }).format(preco)
                }</Texto> 
            </View> 
        </View>  
    </> 
}

const estilos = StyleSheet.create
({
    item:
    {
        backgroundColor: "#BFE1D1",
        width: 375,
        height: 100,
        flexDirection: "column",
        marginBottom: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50,
    },
    imagem:
    {
        width: 75,
        height: 75,     
        marginTop: height*0.01,
        marginLeft: width*0.025,   
    },
    cadaItem: {
        position: "absolute",
        //backgroundColor: "grey",
        width: 300,
        height: 100,
        flexDirection: "row",
        marginLeft: 85,
    },
    quantidade: {
        position: "absolute",
        backgroundColor: "#FFF500",
        borderColor: "black",
        textAlign: "center",
        borderWidth: 2,
        padding: 5,
        borderRadius: 25,
        width: 100,
        height: 30,
        fontWeight: "bold",
        marginLeft: width*0.005,
        marginTop: height*0.07,
        fontSize: 16,
    },
    preco: {
        backgroundColor: "#00FF74",
        width: 150,
        height: 45,
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: width*0.085,
        marginTop: height*0.0625,
        textAlign: "center",
        paddingTop: 10,
        borderRadius: 25, 
        borderWidth: 2,
        borderColor: "black",
    }
})