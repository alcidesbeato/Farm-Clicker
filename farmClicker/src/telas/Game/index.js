import React,{useState,useEffect,useRef}  from 'react';

import { FlatList, Dimensions, View, StyleSheet, Image, ScrollView,StatusBar,Animated,TouchableOpacity } from 'react-native';
import Texto from '../../componentes/Texto'
import BotaoComprar from '../Game/componentes/botaoComprar'
import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import Galinha from '../../../assets/galinha.png';
import Vaca from '../../../assets/vaquinha.png';
import Ovelha from '../../../assets/Ovelhinha.png';
import Porco from '../../../assets/porquinho.png';
import Girafa from '../../../assets/girafinha.png';
import Peixe from '../../../assets/Carpa.png';
import Camarao from '../../../assets/Camarao.png';
import Lontra from '../../../assets/lontra.png';
import Abelha from '../../../assets/Abelha.png';
import Cavalo from '../../../assets/Cavalinho.png';


import mocks from '../../mocks/animais'
//import LoadingBar from '../../componentes/LoadingBar/index'
import { useNavigation } from '@react-navigation/native';



const Progress = ({step,steps,height}) =>
{
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0)

  React.useEffect(() =>
  {

      Animated.timing(animatedValue, {
        toValue: reactive,
        duration: 300,
        useNativeDriver: false,

      }).start();

  }, []);

  React.useEffect(() =>
  {

    reactive.setValue(-width + (width * step) / steps);

  },[step,width]);

  return<>
  <Texto style = {styles.texto}>
    {step}/{steps}
  </Texto>
  <View
  onLayout = {e =>
    {
        const newWidth = e.nativeEvent.layout.width;

        setWidth(newWidth);
    }}
    style ={
      {
        height,
        backgroundColor:"#333333",
        borderWidth: 2,
        borderColor: "white",
        borderRadius:height,
        overflow: 'hidden',
      }
    }
  >
  <Animated.View
    style={{
      height,
      width:'100%',
      borderRadius:height,
      backgroundColor: "#00FF74",
      position:"absolute",
      left:0,
      top:0,
      transform: [
        {
          translateX: animatedValue,
        }
        ]

      
    }}
  />
  </View>
  </>
}

 



  function setDinheiro  (aux) 
  {
    this.setState({
        dinheiro : aux
    });
  }
  
function LoadingBar({time,acao,indexaux}) {
    var [index,setIndex] = React.useState(0);
    const navigation = useNavigation()
    React.useEffect(() =>
    {
  
      const interval = setInterval  (()=>
      {
        setIndex((index+1) %(time+1))
      },1000) 
  
      return () =>
      {
       
        clearInterval(interval);
      }
  
    },[index])
  
    if(index == time)
    {
        console.log(dinheiro);
        setDinheiro(dinheiro+acao);
        return null;

      
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Progress step = {index} steps = {time} height={20}/>
      </View>
      
    );
  }
  
export default function FarmClicker()
{
    
    const navigation = useNavigation()
    const [dinheiro,setDinheiro] = useState(1);
    const [estado,setEstado] = useState(true);
    const [Galinhas,setGalinhas] = useState(0);
    const [Vacas,setVacas] = useState(0);
    const [Porcos,setPorcos] = useState(0);
    const [Ovelhas,setOvelhas] = useState(0);
    const [Cavalos,setCavalos] = useState(0);
    const [Peixes,setPeixes] = useState(0);
    const [Camaroes,setCamaroes] = useState(0);
    const [Abelhas,setAbelhas] = useState(0);
    const [Girafas,setGirafas] = useState(0);
    const [Lontras,setLontras] = useState(0);

    compraGalinhas = () =>
    {
    
        setDinheiro(dinheiro-1);
        setGalinhas(Galinhas+1);
    }

    compraVacas = () =>
    {
        setDinheiro(dinheiro-100);
        setVacas(Vacas+1);
    }

    compraPorcos = () =>
    {
        setDinheiro(dinheiro-500);
        setPorcos(Porcos+1);
    }

    compraOvelhas = () =>
    {
        setDinheiro(dinheiro-1000);
        setOvelhas(Ovelhas+1);
    }

    compraCavalos = () =>
    {
        setDinheiro(dinheiro-2500);
        setCavalos(Cavalos+1);
    }

    compraPeixes = () =>
    {
        setDinheiro(dinheiro-5000);
        setPeixes(Peixes+1);
    }

    compraAbelhas = () =>
    {
        setDinheiro(dinheiro-10000);
        setAbelhas(Abelhas+1);
    }

    compraCamaroes = () =>
    {
        setDinheiro(dinheiro-25000);
        setCamaroes(Camaroes+1);
    }

    compraGirafas = () =>
    {
        setDinheiro(dinheiro-100000);
        setGirafas(Girafas+1);
    }

    compraLontras = () =>
    {
    
        setDinheiro(dinheiro-500000);
        setLontras(Lontras+1);
    }
    
    onPressG = (aux) =>
    {
        //console.log(aux);
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(10000000*((aux)/100)+2));
    }
    onPressV = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(16*((aux)/100)+16));
    }
    onPressP = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(16*((aux)/100)+64));
    }
    onPressO = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(32*((aux)/100)+256));
    }
    onPressC = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(64*((aux)/100)+1024));
    }
    onPressPe = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(128*((aux)/100)+4096));
    }
    onPressA = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(256*((aux)/100)+16376));
    }
    onPressCa = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(256*((aux)/100)+92000));
    }
    onPressGi = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(256*((aux)/100)+500000));
    }
    onPressL = (aux) =>
    {
        
        aux == 0? setDinheiro(dinheiro) : setDinheiro(dinheiro+(256*((aux)/100)+800000));
    }
    return (<>     
        <Topo dinheiro={dinheiro}/> 
        <View style={estilos.bichos}>
      
        <ScrollView style={{marginBottom: 50}}>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressG(Galinhas)} style={{width: 75, height: 75}}>
                <Image source={Galinha} style = {estilos.imagem}/>
            </TouchableOpacity>
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Galinhas} acao={compraGalinhas} preco={1} />
                        <Texto style={estilos.quantidade}>{Galinhas}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1)
                        }</Texto> 
                    </View> 
            </View>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressV(Galinhas)} style={{width: 75, height: 75}}>
                <Image source={Vaca} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Vacas} acao={compraVacas} preco={100}/>
                        <Texto style={estilos.quantidade}>{Vacas}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(100)
                        }</Texto> 
                    </View> 
            </View>    
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressP(Porcos)} style={{width: 75, height: 75}}>
            <Image source={Porco} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Porcos} acao={compraPorcos} preco={500}/>
                        <Texto style={estilos.quantidade}>{Porcos}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(500)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressO(Ovelhas)} style={{width: 75, height: 75}}>
            <Image source={Ovelha} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Ovelhas} acao={compraOvelhas} preco={1000}/>
                        <Texto style={estilos.quantidade}>{Ovelhas}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1000)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressC(Cavalos)} style={{width: 75, height: 75}}>
            <Image source={Cavalo} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Cavalos} acao={compraCavalos} preco={2500}/>
                        <Texto style={estilos.quantidade}>{Cavalos}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(2500)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressPe(Peixes)} style={{width: 75, height: 75}}>
            <Image source={Peixe} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Peixes} acao={compraPeixes} preco={5000}/>
                        <Texto style={estilos.quantidade}>{Peixes}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(5000)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressA(Abelhas)} style={{width: 75, height: 75}}>
            <Image source={Abelha} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Abelhas} acao={compraAbelhas} preco={10000}/>
                        <Texto style={estilos.quantidade}>{Abelhas}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(10000)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressCa(Camaroes)} style={{width: 75, height: 75}}>
            <Image source={Camarao} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Camaroes} acao={compraCamaroes} preco={25000}/>
                        <Texto style={estilos.quantidade}>{Camaroes}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(25000)
                        }</Texto> 
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressGi(Girafas)} style={{width: 75, height: 75}}>
            <Image source={Girafa} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Girafas} acao={compraGirafas} preco={100000}/>
                        <Texto style={estilos.quantidade}>{Girafas}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(100000)
                        }</Texto> 
                    </View> 
            </View>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressL(Lontras)} style={{width: 75, height: 75}}>
            <Image source={Lontra} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Lontras} acao={compraLontras} preco={500000}/>
                        <Texto style={estilos.quantidade}>{Lontras}</Texto> 
                        <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(500000)
                        }</Texto> 
                    </View> 
            </View>
            </ScrollView>
    </View>
<Bottom/>
</>
    
    )
    
}

const estilos = StyleSheet.create({
    bichos: {
        position: "absolute",
        //backgroundColor: "#715535",
        width: 375,
        height: 475,
        marginTop: width*0.4,
        marginLeft: height*0.012,
    },
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
        marginTop: height*0.0325,
        textAlign: "center",
        paddingTop: 10,
        borderRadius: 25, 
        borderWidth: 2,
        borderColor: "black",
    },
    container: {
        position: "absolute",
        width: 100,
        height: 25,
        marginLeft: width*0.335,
      },
      texto: {
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
        textAlign: 'center',
      }
})
  
const styles = StyleSheet.create({
    container: {
      position: "absolute",
      width: 100,
      height: 25,
      marginLeft: width*0.335,
    },
    texto: {
      fontSize:16,
      fontWeight:'bold',
      marginBottom:5,
      textAlign: 'center',
    }
  });