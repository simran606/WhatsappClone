import React  from 'react';
import { View , Text , StyleSheet, StatusBar, Button, Pressable} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatScreen from './chatScreen';
import Camera from './camera';
import StatusScreen from './statusScreen';
import CallScreen from './callScreen';
import Menu from './menu';
import Search from './search';
import Settings from './settings';

const Header = () => {
  return (

    <NativeRouter>
    <View style={{flex: 1,}}>

    <View style={styles.container}>

      <View style={styles.headerContainer}>

        <Text style={styles.whatsapptext}>
            WhatsApp
        </Text>

        <Search />

        <Menu />

      </View>

      <View style={styles.headerContainer} >

          <Link to ="/settings" style={styles.camera} >
             <Icon name="camera" size={20} color="#b1b1b1"  />
          </Link>

          <Link to="/">
             <Text style={styles.text}>
                Chats 
              </Text>
          </Link>

           <Link to="/status">
               <Text style={styles.text}>
                 Status
               </Text>
           </Link>

           <Link to="/calls">
               <Text style={styles.text}>
                 Calls
               </Text>
           </Link>

      </View>
      </View>

      <Route exact path="/" component={ChatScreen} />
      <Route path="/camera" component={Camera} />
      <Route path="/status" component={StatusScreen} />
      <Route path="/calls" component={CallScreen} />
      <Route path='/Menu' component={Menu} />
      <Route path='/settings' component={Settings} />

    </View>
      </NativeRouter>

    );
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    paddingTop: StatusBar.currentHeight || 0 ,
    backgroundColor: '#054c44',
  },
  headerContainer: {
    flexDirection:'row', 
    flexWrap:'wrap',
    paddingTop: 15,
    backgroundColor: '#075E54',
  },
  whatsapptext:{
    color: 'white',
    fontSize: 24, 
    paddingLeft: 20
  },
  text: {
    color: '#b1b1b1',
    paddingLeft : 25,
    // paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    width: 100,
    fontSize: 19
  },
  camera: {
    paddingTop: 20,
    width: '15%',
    alignItems:'center'

  },
  search:{
    // paddingTop: 15,
    position: 'absolute',
    // right: 50
    left: 230
  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});

export default Header;