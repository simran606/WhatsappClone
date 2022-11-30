import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const UpdateText = ({title}) => {
    return(
           <View style={styles.updateContainer}>
               <Text style={styles.updateText}>{title}</Text>
           </View> 
     );
}

const styles = StyleSheet.create({
    updateContainer:{
        backgroundColor:'#f4f4f4',
        padding: 10 
    },
    updateText:{
        color:'#6f6f6f',
        fontWeight: 'bold',
        fontSize: 17
    }, 
})

export default UpdateText;