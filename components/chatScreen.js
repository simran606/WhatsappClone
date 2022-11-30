import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, StatusBar, SafeAreaView, FlatList, Pressable} from 'react-native';
// import vw from 'react-native-viewport-units';
import data from './data';

const Chats = ({img,name,recentmsg,time}) => {

    return(
      <View styles={styles.item}>
        <View style={styles.chatContainer}>
          <Image source={img} style={styles.img} />
            <View style={styles.containertwo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.recentmsg}>{recentmsg}</Text>
            </View>
               <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    )
}

const ChatScreen = () => {
   const renderItem = ({ item }) => (
     <Chats 
     img={item.img}
     name={item.name}
     recentmsg={item.recentmsg}
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
    chatContainer: {
      // flex:1,
      flexDirection:'row', 
      flexWrap:'wrap',
      paddingTop: 10 ,
      backgroundColor: 'white',
      borderBottomWidth: 0.5,
      borderBottomColor: '#b1b1b1',
      borderBottomStartRadius: 80,
      borderStartColor: 'red',
      borderBottomEndRadius: 30
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
      paddingLeft: 10,
      // position: 'relative',
      // borderBottomStartRadius: 10,
      // borderBottomWidth: 0.5,
      borderBottomColor: '#b1b1b1',
      // width: 330
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
        // left: 100,
        top: 15,
        right: 20,
        color: '#b1b1b1',
        fontSize: 13
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },   
  });

export default ChatScreen;
