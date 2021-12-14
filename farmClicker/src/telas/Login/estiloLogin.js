
import { StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    madeira: {
        position: 'absolute',
        marginLeft: height *0.03,
        opacity: 0.75
    },
    iconeLogin:
    {
        position:"absolute",
        marginLeft: height *0.17,
        marginTop: 15,
    },
    view:{
        marginTop: width * 0.55,
    },
    textos: {
        position: "absolute",
        flexDirection: "column",
    },
    textInput:
    {
        marginTop : width * 0.35,
        marginLeft: height *0.13,
        fontFamily: "MontserratAlternatesBold", 
        fontWeight:"normal",
        height: 40,
        width: 200,
        backgroundColor: "#F9EFEF",
        borderRadius: 25,
        padding:10
    },
    titulo: {
        marginTop: width * 0.30,
        marginLeft: height *0.1,
        position:"absolute",
    },
    botao: {
        
    },
    viewBotao: {
        flexDirection: "column",
        marginTop : width * 0.1,
    },
    container: {
        marginTop: height*0.55,
      },
})