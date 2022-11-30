import React from 'react';
import { ScrollView,View, Text, StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from './data';
import MyStatus from './myStatus';
import UpdateText from './updateText';


const Item = ({img, name, time, calltime}) => {
      return( 
            <View style={styles.itemContainer}>
                <View>
                   <Image source={img} style={styles.img}/>              
                 </View>

                 <View style={styles.containertwo}>
                   <Text style={styles.name}>{name}</Text>
                   <Text style={styles.recentmsg}>{time}{calltime}</Text>
                 </View>
            </View>
            );

}


const StatusScreen = () => {
    const renderItem = ({ item }) => (
      <Item 
      img={item.img}
      name={item.name}
      calltime={item.calltime}
      time={item.time}
       />
  );

  return (
    <ScrollView>
    <SafeAreaView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
    

    
      <MyStatus  />
      <UpdateText title='Recent updates'  />

      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        // ListHeaderComponent={MyStatus}
        // ListFooterComponent={MyStatus}
        // style={{flex: 4}}
      />

      <UpdateText title='Viewed updates' />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        // style={{flexGrow: 1}}
      />

    </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    // flex: 1,
    // height: '100%'
    // marginBottom: 500,
    // backgroundColor:'red'
  },
    itemContainer: {
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
    time: {
        position:'absolute',
        right: 10,
        color: '#b1b1b1',
        fontSize: 15
    },
    updateContainer:{
        backgroundColor:'#DCDCDC',
        padding: 10 
    },
    updateText:{
        color:'grey',
        fontWeight: 'bold',
        fontSize: 17
    },   
  });

export default StatusScreen;