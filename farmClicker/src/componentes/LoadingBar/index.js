import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated,StyleSheet, Text, View, Dimensions } from 'react-native';

import Texto from '../../componentes/Texto'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


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
        backgroundColor:'rgba(0,0,0,0.1)',
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
      backgroundColor: 'rgba(0,0,0,0.5)',
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
export default function LoadingBar({setEstado,time}) {
  const [index,setIndex] = React.useState(0);

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
    //console.log("aqui");
    setEstado();
    
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step = {index} steps = {time} height={20}/>
    </View>
    
  );
}

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