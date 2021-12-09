import { StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('screen').width;

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
    fundoTopo:{
        width: "100%",
        height: 150/412 * width,
        
    },
    fundo: {
        width: "100%",
        height: 731 / 411 * width,
        position:"absolute",
        
    },
   fundoBottom:
    {
        width: "100%",
        height: 100/279 * width,
        position:"absolute",

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
        marginLeft: 95,
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
        marginHorizontal: 65,
        marginVertical: -65,
    }

})