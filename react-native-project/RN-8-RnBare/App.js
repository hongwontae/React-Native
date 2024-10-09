import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync, PermissionStatus} from 'expo-location';


export default function App() {

  async function getUserLoactionHandler(){
    const {status} = await requestForegroundPermissionsAsync();
    if(status !== PermissionStatus.GRANTED){
      console.log('현재 위치 정보 전송에 승인해야 카메라를 열 수 있습니다.')
      return
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  return (
    <View style={styles.container}>
     <StatusBar style="auto" />
     <Button title='Get Loaction' onPress={getUserLoactionHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
