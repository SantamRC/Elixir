import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
  

const LoginScreen = ({navigation}) =>  {
    return (
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={{ marginTop: 84 }}>
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>Elixir</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            placeholderTextColor="#a197a6"
            keyboardType = 'number-pad'
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity
              style={styles.continue}
              onPress={() => navigation.navigate('ChatScreen')}>
              <Ionicons name="arrow-forward-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37476e",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#313f63",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "800",
    fontSize: 50,
    color: "#f5f7ed",
    marginTop: 32,
    marginLeft: 110,
  },
  input: {
    marginTop: 100,
    height: 58,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#a197a6",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#6e669e",
    fontWeight: "600",
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#6e669e",
    alignItems: "center",
    justifyContent: "center",
  }
})