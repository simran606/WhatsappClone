import React from 'react';
import { ScrollView,View, Text, StyleSheet, Image,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyStatus = () => {
    return(

        // <ScrollView >

            <View style={styles.container}>
                <View>
                   <Image source={require('../assets/Image/img.jpg')} style={styles.img}/> 
                   <Icon name="plus" size={15}  color='white' style={styles.plus} />                  
                 </View>

                 <View style={styles.containertwo}>
                   <Text style={styles.name}>My Status</Text>
                   <Text style={styles.recentmsg}>Tap to Add Status</Text>
                 </View>
            </View>
           
        // </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingTop: 10 ,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
      },
      img: {
          height: 60,
          width: 60,
          borderRadius: 50,
          marginLeft: 10,
          marginRight: 10
      },
      plus:{
          borderRadius: 50,
          padding: 3,
          backgroundColor:'#23c25d',
          position: 'absolute',
          left: 50,
          top: 40
      },
      containertwo: {
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f4f4f4',
        width: 250
      },
      name: {
        marginTop: 2,
        fontSize: 19
      },
      recentmsg: {
        fontSize: 17,
        color: '#b1b1b1',
      },
})

export default MyStatus;
