import React from 'react';

import {View,StyleSheet, Text, ProgressBarAndroid} from 'react-native'

export default function App(){    
    
    //temp,tempCorrido
    // const valor = 0;

    // tempCorrido == 0 ? valor = 0 : valor =(tempCorrido / temp);



  return (
     <View style={styles.container}>
       <View style={styles.example,{heigth:100}}>
        <ProgressBarAndroid
          styleAttr={'Horizontal'}
          indeterminate={false}
          progress={0.5}
          //style = {{heigth:100,width:100}}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  example: {
    marginVertical: 24,
  },

});