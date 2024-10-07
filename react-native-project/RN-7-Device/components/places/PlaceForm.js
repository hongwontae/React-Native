import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { useState } from "react";
import Button from "../UI/Button";
import Place from '../../model/Place'

import {useNavigation} from '@react-navigation/native'

function PlaceForm({createPlaceHandler}) {

  const [enteredTitle, setEnteredTitle] =useState();
  const [enteredImage, setEnteredImage] = useState();
  const [enteredLocation, setEnteredLocation] = useState();


  function titleHandler(title){
    setEnteredTitle(title)
  }

  function imageHandler(image){
    setEnteredImage(image)
  }

  function locationHandler(location){
    setEnteredLocation(location)
  }


  function saveHandler(){
    const place = new Place(enteredTitle, enteredImage, enteredLocation);
    createPlaceHandler(place)
  }

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.labelStyle}>Title</Text>
          <TextInput style={styles.inputStyle} onChangeText={titleHandler} placeholder="Title"/>
        </View>
        <ImagePicker imageHandler={imageHandler}></ImagePicker>
        <LocationPicker locationHandler={locationHandler}></LocationPicker>
        <Button onPress={saveHandler}>Save</Button>
      </ScrollView>
    </>
  );
}

export default PlaceForm;


const styles = StyleSheet.create({
  form : {
    flex : 1,
    padding : 24
  },
  labelStyle : {
    fontWeight : 'bold',
    textAlign : 'center',
    color : Colors.primary500,
    fontSize : 18
  },
  inputStyle : {
    backgroundColor : Colors.primary100,
    paddingVertical : 4,
    marginVertical : 8,
    marginHorizontal : 4,
  }
})
