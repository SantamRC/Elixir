import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useCallback} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
    /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d5d5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    height:600,
    width:300,
    backgroundColor:'#6074e6',
    borderRadius:50,
    position:'absolute',
    zIndex:-1,
  },
  txt:{
    color:"white"
  }
});
