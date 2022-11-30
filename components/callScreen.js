import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, StatusBar, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from './data';

const Call = ({img, name, calltime, time}) => {
    return(

      <View styles={styles.item}>

             <View style={styles.itemcontainer}>
                <Image source={img} style={styles.img}/> 
                <View style={styles.containertwo}>
                   <Text style={styles.name}>{name}</Text>
                  <View>                    
                     <Text style={styles.recentmsg}>
                     <Image source={require('../assets/Image/incoming-call.png')} style={styles.arrow} />
                       {calltime}, <Text style={styles.time}>{time}</Text>
                     </Text>     
                  </View> 
                </View>
                <View >
                   <Icon name="phone" size={30} color='#075E54' style={styles.phone}/>
                </View>                 
            </View>

       </View>

    )
}

const CallScreen = () => {
   const renderItem = ({ item }) => (
     <Call 
     img={item.img}
     name={item.name}
     calltime={item.calltime}
     time={item.time}
      />
   );
 
   return (
     <SafeAreaView style={styles.container} >
       <FlatList
         data={data}
         renderItem={renderItem}
         keyExtractor={item => item.id.toString()}
         style={{flexGrow: 1}}
       />
     </SafeAreaView>
   );
 }

const styles = StyleSheet.create({
   container:{
      flex: 2,
      // marginBottom: 50,
      paddingBottom: StatusBar.currentHeight || 200 ,
    },
    itemcontainer: {
      // flex:1,
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
    containertwo: {
      paddingBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: '#b1b1b1',
      width: 310
    },
    name: {
      marginTop: 2,
      fontSize: 19
    },
    recentmsg: {
      fontSize: 17,
      color: '#b1b1b1',
       },
    time: {
      position:'absolute',
      right: 10,
      color: '#b1b1b1',
    fontSize: 15
    },
    phone: {
         position: 'absolute',
         right: 10,
         top: 12
    },
    arrow: {
       height: 10,
       width: 10,
       marginRight: 10,
       paddingBottom: 10
     }  , 
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 8,
    },   
  });

export default CallScreen;
