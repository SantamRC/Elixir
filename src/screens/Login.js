import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
    return (
        <View>
            <Text style={styles.text}>Login Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        alignContent:'center'
    }
})