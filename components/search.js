import React, {useState} from 'react';
import { View , Text, Modal, Alert, Pressable, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
    const [modalVisible,setModalVisible] = useState(false);
    return(
        <View style={styles.centredView}>
            <Modal
            animationType = 'slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose ={() => {
                Alert.alert('Modal has been closed');
                setModalVisible(!modalVisible);
            }} >
                <View style={styles.centredView}>
                    <View style={styles.modalView}>
                            <Text style={styles.modalText}>New Group</Text>
                        <Pressable style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)} >
                            <Text>hghgh</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* <Pressable style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)} >
                <View  >
                   <Icon name="ellipsis-v" size={24} color="white" /> 
                </View>
            </Pressable>

            <Button title='<Icon name="ellipsis-v" size={24} color="white" />' style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)} /> */}
            
            <Icon name="search" size={24} color="white" style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)} /> 
        </View>
    )
}

const styles = StyleSheet.create({
  centeredView: {
    //   position:'relative'
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "left",
    // marginTop: 22
  },
  modalView: {
    marginLeft: '50%',
    backgroundColor: "white",
    padding: 10,
    // position: 'absolute',
    // top: 60,
    width: '50%',
    marginRight: 5,
    // right: 20,
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    //   position:'relative'
    // borderRadius: 20,
    padding: 5,
    // elevation: 2
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
    // paddingTop: 5,
    // position: 'absolute',
    left: 220,
    // right: 200
    // zIndex: 100
  }, 
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 16,
    // marginBottom: 15,
    textAlign: "left",
    paddingTop: 15,
    paddingBottom: 15
  },
});

export default Search;