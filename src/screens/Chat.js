import React from 'react'
import { View, StyleSheet, Text} from 'react-native';

export default function Chat() {
    return (
        <View>
            <Text style={styles.text}>Chat Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        alignContent:'center'
    }
})
