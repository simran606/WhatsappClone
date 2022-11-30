import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';

const Camera = () => {
      return (
        <View style={styles.container}>
        <Text>Camera Screen</Text>
          {/* <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            // ref={ref => {
            //   this.camera = ref
            // }}
          /> */}
        </View>
      )
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    //   backgroundColor: 'black'
    }
  })

  export default Camera;
  