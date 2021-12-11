import { StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    titulo:
    {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    },
    fotoPerfil: {
        position: "absolute",
        marginTop: 25,
        marginLeft: 10,
        width: 75,
        height: 75,
    },
    dinheiro: {
        width: "100%",
        position:"absolute",
        fontSize: 18,
        lineHeight: 32,
        color: "white",
        marginTop: 50,
        marginLeft: 90,
    },
    nome: {
        width: "100%",
        position:"absolute",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 32,
        color: "white",
        marginTop: 25,
        marginLeft: 90,
    },
    cash: {
        position: "absolute",
        flexDirection: "row",
        marginHorizontal: 85,
        marginVertical: 80,
    },
    dinheiroExtra: {
        marginRight: 50,
        width: 30,
        height: 30,
    },
    dinheiroFazendeiroVerde: {
        width: "100%",
        position:"absolute",
        fontSize: 16,
        lineHeight: 26,
        color: "#00FF74",
        marginHorizontal: 30,
    },
    dinheiroPagoAmarelo: {
        position:"absolute",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFF500",
        marginHorizontal: 110,
    },
    removeAd: {
        marginLeft: width*0.1,
        marginTop: -(height*0.07),
    },
    botao: {
        //backgroundColor:"green",
        width:70,
        height:90,
        marginLeft: width*0.1,
        marginTop: -(height*0.07),
      }

})