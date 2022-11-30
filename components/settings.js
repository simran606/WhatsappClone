import React from 'react';
import {ScrollView,Text, View, Image, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import settingsdata from './settingsdata';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/'

const Item = ({icon,heading,description}) => {
    return(
        <View style={[styles.containerthree , styles.container]}>
           <Icon name={icon} size={18} style={styles.icon} />
           <View>
           <Text style={styles.text}>{heading}</Text>
           <Text style={styles.texttwo}>{description}</Text>
           </View>
        </View>
    );
}

const Settings = () => {

    const renderItem = ({ item }) => (
        <Item 
        icon={item.icon}
        heading={item.heading}
        description={item.description}
         />
      );

    return(
        <SafeAreaView>

            <View style={[styles.container , styles.containerOne]}>
                <Image source={require('../assets/Image/img.jpg')} style={styles.image} />
                <View>
                   <Text style={styles.text}>Simran</Text>
                   <Text style={styles.textstatus}>Hi there! I am available.</Text>
                </View>
            </View>

            
            <View style={styles.flatlist}>
                <FlatList
               data={settingsdata}
               renderItem={renderItem}
               keyExtractor={item => item.id.toString()}
               style={{flexGrow: 1}}
               />
            </View>

            <View style={styles.container}>
                <Icon name="users" size={15} style={styles.icon} />
                <Text style={styles.text}>Invite a friend</Text>
            </View>

            <View >
                <Text style={[styles.centeredtext , styles.texttwo]}>
                    from
                </Text>
                <Text style={styles.centeredtexttwo}>
                    F A C E B O O K
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row', 
      flexWrap:'wrap',
      paddingTop: 20 ,
    },
    containerOne: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#b1b1b1',
        padding: 10,
    },
    containerthree: {
        borderBottomColor: '#b1b1b1'
    },
    flatlist: {
        borderBottomColor: '#b1b1b1',
        borderBottomWidth: 0.5,
        // paddingLeft : 50,
        borderBottomStartRadius: 45,
        paddingBottom: 20
    },
    image: {
       height: 55,
       width: 55,
       borderRadius: 50,
       marginRight: 15
   },
   icon: {
       color: 'lightgreen',
       marginRight: 10,
       marginLeft: 10
   },
   text: {
       color: 'black',
       fontSize: 17
   },
   texttwo: {
    color: '#b1b1b1',
    fontSize: 16
   },
   textstatus: {
       fontSize: 15
   },
   centeredtext: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15    
   },
   centeredtexttwo: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    // letterSpacing: 2,
    fontWeight: 'bold'    
   },
})

export default Settings;