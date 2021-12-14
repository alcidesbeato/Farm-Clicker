import React,{useState,useEffect,useRef}  from 'react';

import { FlatList, Dimensions, View, StyleSheet, Image, ScrollView,StatusBar,Animated,TouchableOpacity } from 'react-native';
import Texto from '../../componentes/Texto'
import BotaoComprar from '../Game/componentes/botaoComprar'
import Topo from "./componentes/topo";
import Bottom from './componentes/bottom';
import Animais from './Lista/animais'
import { getInstance } from '../../api';

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
        //console.log(dinheiro);
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
  
export default function FarmClicker({route})
{
    const name = 'garrosm'
    const instance = getInstance();
    async function updateUser(name, valor){
        const {data} = await (await instance).put(`/api/usuarios/${name}`, valor);
        console.log('data', data);
    }
    const navigation = useNavigation()
    
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
    const {upGrades} = route.params;
    const [dinheiro,setDinheiro] = useState(upGrades[10]);
    
    
    var teste2 = upGrades[10];
    
    
   
    
   
    
    const compraGalinhas = () =>
    {
        setDinheiro(dinheiro-1);
        setGalinhas(Galinhas+1);
        upGrades[10] = dinheiro;
         valor = {
             quant_galinhas: Galinhas+1,
             reais: dinheiro-1
         }
        updateUser(name,valor);
    }

    const compraVacas = () =>
    {
        setDinheiro(dinheiro-100);
        setVacas(Vacas+1);
        upGrades[10] = dinheiro;
         valor = {
             quant_vaca: Vacas+1,
             reais: dinheiro-100
         }
         updateUser(name,valor);
    }

    const compraPorcos = () =>
    {
        setDinheiro(dinheiro-500);
        setPorcos(Porcos+1);
        upGrades[10] = dinheiro;
         valor = {
             quant_porco: Porcos+1,
             reais: dinheiro-500
         }
        updateUser(name,valor);
    }

    const compraOvelhas = () =>
    {
        setDinheiro(dinheiro-1000);
        setOvelhas(Ovelhas+1);
        upGrades[10] = dinheiro;
         valor = {
             quant_ovelha: Ovelhas+1,
             reais: dinheiro-1000
         }
        updateUser(name,valor);
    }

    const compraCavalos = () =>
    {
        setDinheiro(dinheiro-2500);
        setCavalos(Cavalos+1);
        upGrades[10] = dinheiro;
         valor = {
             quant_cavalo: Cavalos+1,
             reais: dinheiro-2500
         }
        updateUser(name,valor);
    }

    const compraPeixes = () =>
    {
        setDinheiro(dinheiro-5000);
        setPeixes(Peixes+1);
        upGrades[10] = dinheiro;
        valor = {
            quant_peixe: Peixes+1,
            reais: dinheiro-5000
        }
        updateUser(name,valor);
    }

    const compraAbelhas = () =>
    {
        setDinheiro(dinheiro-10000);
        setAbelhas(Abelhas+1);
        upGrades[10] = dinheiro;
        valor = {
            quant_abelha: Abelhas+1,
            reais: dinheiro-10000
        }
        updateUser(name,valor);
    }

    const compraCamaroes = () =>
    {
        setDinheiro(dinheiro-25000);
        setCamaroes(Camaroes+1);
        upGrades[10] = dinheiro;
        valor = {
            quant_camarao: Camaroes+1,
            reais: dinheiro-25000
        }
        updateUser(name,valor);
    }

    const compraGirafas = () =>
    {
        setDinheiro(dinheiro-100000);
        setGirafas(Girafas+1);
        upGrades[10] = dinheiro;
        valor = {
            quant_girafa: Girafas+1,
            reais: dinheiro-10000
        }
        updateUser(name,valor);
    }

    const compraLontras = () =>
    {
    
        setDinheiro(dinheiro-500000);
        setLontras(Lontras+1);
        upGrades[10] = dinheiro;
         valor = {
            quant_lontra: Lontras+1,
            reais: dinheiro-500000
        }
        updateUser(name,valor);
    }
    
    const onPressG = (aux) =>
    {
        //console.log(aux);
        //aux == 0? setDinheiro(dinheiro) : setDinheiro((upGrades[0]*2)*dinheiro+(10000000*((aux)/100)+2));
        aux == 0? setDinheiro(dinheiro) : setDinheiro (upGrades[0] == 0 ? (dinheiro+(10000000*((aux)/100)+2)):(upGrades[0]*2)*dinheiro+(10000000*((aux)/100)+2));
        
        upGrades[10] = dinheiro;
        console.log(upGrades[10]);
    }
    const onPressV = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[1] == 0 ? (dinheiro+(16*((aux)/100)+16)):(upGrades[1]*2)*dinheiro+(16*((aux)/100)+16));
        upGrades[10] = dinheiro;
    }
    const onPressP = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[2] == 0 ? (dinheiro+(16*((aux)/100)+64)):(upGrades[2]*2)*dinheiro+(16*((aux)/100)+64));
        upGrades[10] = dinheiro;
    }
    const onPressO = (aux) =>
    {
        //aux == 0? setDinheiro(dinheiro) : setDinheiro((upGrades[3]*2)*dinheiro+(32*((aux)/100)+256));
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[3] == 0 ? (dinheiro+(32*((aux)/100)+256)):(upGrades[3]*2)*dinheiro+(32*((aux)/100)+256));
        upGrades[10] = dinheiro;
    }
    const onPressC = (aux) =>
    {
        //aux == 0? setDinheiro(dinheiro) : setDinheiro((upGrades[4]*2)*dinheiro+(64*((aux)/100)+1024));
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[4] == 0 ? (dinheiro+(64*((aux)/100)+1024)):(upGrades[4]*2)*dinheiro+(64*((aux)/100)+1024));
        upGrades[10] = dinheiro;
    }
    const onPressPe = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[5] == 0 ? (dinheiro+(128*((aux)/100)+4096)):(upGrades[5]*2)*dinheiro+(128*((aux)/100)+4096));
        upGrades[10] = dinheiro;
    }
    const onPressA = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[6] == 0 ? (dinheiro+(256*((aux)/100)+16376)):(upGrades[6]*2)*dinheiro+(256*((aux)/100)+16376));
        upGrades[10] = dinheiro;
    }
    const onPressCa = (aux) =>
    {   
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[7] == 0 ? (dinheiro+(256*((aux)/100)+92000)):(upGrades[7]*2)*dinheiro+(256*((aux)/100)+92000));
        upGrades[10] = dinheiro;
    }
    const onPressGi = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[8] == 0 ? (dinheiro+(256*((aux)/100)+500000)):(upGrades[8]*2)*dinheiro+(256*((aux)/100)+500000));
        
        upGrades[10] = dinheiro;
    }
    const onPressL = (aux) =>
    {
        aux == 0? setDinheiro(dinheiro) : setDinheiro(upGrades[9] == 0 ? (dinheiro+(256*((aux)/100)+800000)):(upGrades[9]*2)*dinheiro+(256*((aux)/100)+800000));

        upGrades[10] = dinheiro;
    }

    return (<>     
        <Topo dinheiro={dinheiro} /> 
        <View style={estilos.bichos}>
        <ScrollView style={{marginBottom: 50}}>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressG(Galinhas)} style={estilos.touchable}>
                <Image source={Galinha} style = {estilos.imagem}/>
            </TouchableOpacity>
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Galinhas} acao={() => compraGalinhas()} preco={1} />
                        <Texto style={estilos.quantidade}>{Galinhas}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Galinhas == 0 ? 0 : (upGrades[0] == 0 ? ((10000000*((Galinhas)/100)+2)):(upGrades[0]*2)*(10000000*((Galinhas)/100)+2)))
                        }</Texto> 
                    </View> 
            </View>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressV(Vacas)} style={estilos.touchable}>
                <Image source={Vaca} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Vacas} acao={() => compraVacas()} preco={100}/>
                        <Texto style={estilos.quantidade}>{Vacas}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(100)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Vacas == 0 ? 0 : (upGrades[1] == 0 ? ((16*((Vacas)/100)+16)):(upGrades[1]*2)*(16*((Vacas)/100)+16)))
                        }</Texto>
                    </View> 
            </View>    
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressP(Porcos)} style={estilos.touchable}>
            <Image source={Porco} style = {estilos.imagem}/>
            </TouchableOpacity>
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Porcos} acao={() => compraPorcos()} preco={500}/>
                        <Texto style={estilos.quantidade}>{Porcos}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(500)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Porcos == 0 ? 0 : (upGrades[2] == 0 ? ((16*((Porcos)/100)+64)):(upGrades[2]*2)*(16*((Porcos)/100)+64)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressO(Ovelhas)} style={estilos.touchable}>
            <Image source={Ovelha} style = {estilos.imagem}/>
            </TouchableOpacity>
           
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Ovelhas} acao={() => compraOvelhas()} preco={1000}/>
                        <Texto style={estilos.quantidade}>{Ovelhas}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Ovelhas == 0 ? 0 : (upGrades[3] == 0 ? ((32*((Porcos)/100)+256)):(upGrades[3]*2)*(32*((Porcos)/100)+256)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressC(Cavalos)} style={estilos.touchable}>
            <Image source={Cavalo} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Cavalos} acao={() => compraCavalos()} preco={2500}/>
                        <Texto style={estilos.quantidade}>{Cavalos}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(2500)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Cavalos == 0 ? 0 : (upGrades[4] == 0 ? ((64*((Cavalos)/100)+1024)):(upGrades[4]*2)*(64*((Porcos)/100)+1024)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressPe(Peixes)} style={estilos.touchable}>
            <Image source={Peixe} style = {estilos.imagem}/>
            </TouchableOpacity>
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Peixes} acao={() => compraPeixes()} preco={5000}/>
                        <Texto style={estilos.quantidade}>{Peixes}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(5000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Peixes == 0 ? 0 : (upGrades[5] == 0 ? ((128*((Peixes)/100)+4096)):(upGrades[5]*2)*(128*((Peixes)/100)+4096)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressA(Abelhas)} style={estilos.touchable}>
            <Image source={Abelha} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Abelhas} acao={() => compraAbelhas()} preco={10000}/>
                        <Texto style={estilos.quantidade}>{Abelhas}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(10000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Abelhas == 0 ? 0 : (upGrades[6] == 0 ? ((256*((Abelhas)/100)+16376)):(upGrades[6]*2)*(256*((Abelhas)/100)+16376)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressCa(Camaroes)} style={estilos.touchable}>
            <Image source={Camarao} style = {estilos.imagem}/>
            </TouchableOpacity>
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Camaroes} acao={() => compraCamaroes()} preco={25000}/>
                        <Texto style={estilos.quantidade}>{Camaroes}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(25000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Camaroes == 0 ? 0 : (upGrades[7] == 0 ? ((256*((Camaroes)/100)+92000)):(upGrades[7]*2)*(256*((Camaroes)/100)+92000)))
                        }</Texto>
                    </View> 
            </View>  
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressGi(Girafas)} style={estilos.touchable}>
            <Image source={Girafa} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Girafas} acao={() => compraGirafas()} preco={100000}/>
                        <Texto style={estilos.quantidade}>{Girafas}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(100000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Girafas == 0 ? 0 : (upGrades[8] == 0 ? ((256*((Girafas)/100)+500000)):(upGrades[8]*2)*(256*((Girafas)/100)+500000)))
                        }</Texto>
                    </View> 
            </View>
            <View style={estilos.item}> 
            <TouchableOpacity onPress={()=>onPressL(Lontras)} style={estilos.touchable}>
                <Image source={Lontra} style = {estilos.imagem}/>
            </TouchableOpacity>
                
                    <View style={estilos.cadaItem}>
                        <BotaoComprar dinheiro={dinheiro} quantidade={Lontras} acao={() => compraLontras()} preco={500000}/>
                        <Texto style={estilos.quantidade}>{Lontras}</Texto> 
                        <Texto style={estilos.preco}>Price:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(500000)
                        }</Texto> 
                        <Texto style={estilos.earning}>Earning per Click:{'\n'}{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(Lontras == 0 ? 0 : (upGrades[9] == 0 ? ((256*((Lontras)/100)+800000)):(upGrades[9]*2)*(256*((Lon)/100)+800000)))
                        }</Texto>
                    </View> 
            </View>
            </ScrollView>
    </View>
<Bottom params={upGrades} dinheiro={dinheiro} />
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
        height: 175,
        flexDirection: "column",
        marginBottom: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50,
        borderWidth: 2,
        borderColor: "black",
    },
    touchable: {
        width: 75,
        height: 75,
        //backgroundColor: "blue",
        marginTop: height*0.055,
        marginLeft: width*0.025, 
    },
    imagem:
    {
        width: 75,
        height: 75,      
        //backgroundColor: "grey",
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
        marginTop: height*0.1185,
        fontSize: 16,
    },
    preco: {
        backgroundColor: "#00FF74",
        width: 175,
        height: 65,
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: width*0.085,
        marginTop: height*0.0225,
        textAlign: "center",
        paddingTop: 7.5,
        borderRadius: 25, 
        borderWidth: 2,
        borderColor: "black",
    },
    earning: {
        position: "absolute",
        backgroundColor: "#00FF74",
        width: 175,
        height: 65,
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: width*0.2775,
        marginTop: height*0.115,
        textAlign: "center",
        paddingTop: 7.5,
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