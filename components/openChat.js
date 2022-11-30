import React from 'react';
import {ScrollView,Text, View, StyleSheet,} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const OpenChat = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <TextInput value='vdfjgdkjg'></TextInput>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right: 10,
        padding: 10,
        textAlign: 'left'
    }
})

export default OpenChat;

