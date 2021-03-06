import React,{useEffect} from 'react'
import { Image, StyleSheet, Text, View,Dimensions,TouchableOpacity,FlatList, ScrollView } from 'react-native'

import Texto  from '../../componentes/Texto'

import Fundo from '../../componentes/Fundo'
import MadeiraTopo from '../../componentes/MadeiraTopo'
import BottomRedondo from '../../componentes/BottomRedondo'
import folhaShop from '../../../assets/folhaShop.png'
import botaoSair from '../../../assets/botaoSair.png'
import fundoSettings from '../../../assets/FundoSettings.png'
import dinheiroMarrom from '../../../assets/DinheiroMarrom.png'
import dinheiroVerde from '../../../assets/DinheiroVerde.png'
import dolarsVerde from '../../../assets/DolarsVerde.png'
import dolarsMarrom from '../../../assets/DolarsMarrom.png'
import fazendeiroMarrom from '../../../assets/FazendeirosMarrom.png'
import fazendeiroVerde from '../../../assets/FazendeirosVerde.png'
import Animais from './Upgrade'
import Botao from './botao'

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

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import mocks from '../../mocks/animais'
import { useNavigation } from '@react-navigation/native';

export default function Shop({route}){
    const navigation = useNavigation()

    const {vet} = route.params;
 
    //console.log(vet[0]);

    const setVet = (position,preco) =>
    {
       /// console.log("teste");
        vet[position] = 1;
        vet[10] = vet[10] - preco;
        console.log(vet[10]+"aqui");
        navigation.navigate('Shop',{vet:vet})
       
    } 

 
    return <View style={{flex: 1}}>
        <Fundo/>
        <MadeiraTopo/>
        <View style={[{flexDirection: 'row'},{position: 'absolute'}]}>
            <Image source={folhaShop} style={estilos.folhaShop}/>
            <TouchableOpacity onPress={()=>navigation.navigate('Farm',{upGrades:vet})}>
                <Image source={botaoSair} style={estilos.botaoSair}/>
            </TouchableOpacity>
        </View> 
        <Texto style={estilos.dinheiro}>
        { 
            Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
            }).format(vet[10])
        } </Texto>

        <View>
            <Image source={fundoSettings} style={estilos.fundoSettings}/> 
            <View style={estilos.menu}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity >
                        <Image source={dinheiroMarrom} style={estilos.icones}/>
                    </TouchableOpacity >
                    <TouchableOpacity style ={{marginLeft:width*0.20}} onPress={()=>navigation.navigate('ShopFazendeiro')}>
                        <Image source={fazendeiroVerde} style={estilos.icones}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginLeft:width*0.18}} onPress={()=>navigation.navigate('ShopDolar')}>
                        <Image source={dolarsVerde} style={estilos.icones}/>
                    </TouchableOpacity>
                </View>
                <View style={estilos.opcoesCompra}>
            <ScrollView style={{marginBottom: 50}}>
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Galinha} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Chicken 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(10000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[0]} acao = {() => setVet(0,10000)} valor = {10000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Vaca} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Cow 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(15000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[1]} acao = {() => setVet(1,15000)} valor = {15000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Porco} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Pig 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(40000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[2]} acao = {() => setVet(2,40000)} valor = {40000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Ovelha} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Sheep 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(95000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[3]} acao = {() => setVet(3,95000)} valor = {95000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Cavalo} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Horse 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(150000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[4]} acao = {() => setVet(4,15000)} valor = {150000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Peixe} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Fish 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(320000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[5]} acao = {() => setVet(5,320000)} valor = {320000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                    {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Abelha} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Bee 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1500000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[6]} acao = {() => setVet(6,1500000)} valor = {1500000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Camarao} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Shrimp 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(3200000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[7]} acao = {() => setVet(7,3200000)} valor = {3200000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Girafa} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Giraffe 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(10000000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[8]} acao = {() => setVet(8,10000000)} valor = {10000000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
                {/*----------------------------------------------------*/}
                <View style={estilos.item}> 
                    <Image source={Lontra} style = {estilos.imagem}/>
                    <View style={estilos.cadaItem}>
                        <View style={estilos.detalhes}>
                            <Texto style={estilos.nome}>Otter 2x!</Texto>
                            <Texto style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                                }).format(1000000000)
                            }</Texto>
                            <Botao dinheiro={vet[10]} comprado = {vet[9]} acao = {() => setVet(9,1000000000)} valor = {1000000000}/>  
                        </View>
                    </View>
                </View>
                {/*----------------------------------------------------*/}
            </ScrollView>      
            </View>
            </View>      
        </View> 
        <BottomRedondo/>
    </View>
}

const estilos = StyleSheet.create({
    folhaShop: {
        marginTop: (height*0.03),
        marginLeft: (width*0.20),
    },
    botaoSair: {
        marginTop: 10,
        marginLeft: 10,
    },
    fundoSettings: {
        width: 400,
        height: 400,
        marginTop: 70, 
    },
    dinheiro: {
        backgroundColor: "#BFE1D1",
        fontWeight: '600',
        position: "absolute",   
        marginTop: width*0.45,
        marginLeft: height*0.05,
        fontSize: 20,
        lineHeight: 32,
        borderRadius: 25,
        width: 300,
        textAlign: "center",
    },
    menu: {
        position: "absolute",
        //backgroundColor: "blue",
        width: 300,
        height: 75,
        marginTop: width*0.275,
        marginLeft: height*0.055,
    },
    icones: {
        width: 50,
        height: 50,
        //position: "absolute",
        //backgroundColor: "grey",
        //marginTop: width*0.275,
    },
    opcoesCompra: {
        //backgroundColor: "blue",
        width: 300,
        height: 275,
        marginTop: width*0.01,
    }, 
    item:
    {
        backgroundColor: "#BFE1D1",
        width: 300,
        height: 65,
        flexDirection: "column",
        marginBottom: 10,
        borderRadius: 25, 
    },
    imagem:
    {
        position: "absolute",
        width: 35,
        height: 35,
        marginLeft: 10,   
        marginTop: 10,   
    },
    cadaItem: {
        position: "absolute",
        //backgroundColor: "grey",
        width: 175,
        height: 65,
        flexDirection: "row",
        marginLeft: 50,
        borderRadius: 25, 
    },
    detalhes:{
        flexDirection: "column",
        position: "absolute",
        marginLeft: height*0.025,
    },
    nome: {
        position: "absolute",
        //backgroundColor: "green",
        //marginBottom: 10,
        height: 30,
        fontSize: 16,
        fontWeight: "bold",
    },
    preco: {
        //backgroundColor: "white",
        position: "absolute",
        height: 30,
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
        marginTop: 30,
        marginLeft: width*0.02,
    },
})