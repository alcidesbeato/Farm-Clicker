import { StyleSheet, Dimensions} from 'react-native'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    fundoBottom:
    {
        width: "100%",
        height: 100/279 * width,
    },
    viewIcones:
    {
        position: "absolute",
        flexDirection: "row",
    },
    icones:
    {
        marginTop: width*0.13,
        marginLeft: height*0.07,
    },
    texto: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        fontSize: 18,
        marginLeft: width*0.125,
    }, 
})