import { Button, View, Alert, Image, Text, StyleSheet } from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker({imageHandler}){

    const [previewImage, setPreviewImage] = useState()

    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    
    async function verifyPermission() {
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            return permissionResponse.granted
        }

        if(cameraPermissionInfo.status === PermissionStatus.DENIED){
            Alert.alert('Permission not', 'you need to grant camera permissions to use this app');
            return false
        }
        return true; // 모름 상태도 아니고 거부 상태도 아니기 때문에 true를 반환합니다.
    }

    async function takeImage() {

        const hasPermission = await verifyPermission();

        if(!hasPermission){
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing : true,
            aspect : [16, 9],
            quality : 0.5
        });


        if(!image.assets){
            return;
        }

        setPreviewImage(image.assets[0].uri)
        imageHandler(image.assets[0].uri)
    }

    let imageData;

    if(!previewImage){
        imageData = <Text style={styles.imageFallbackText}>Image Not</Text>
    } else {
        imageData = <Image style={styles.imageStyle} source={{uri : previewImage}}></Image>
    }

    return(
        <>
            <View>
                <View style={styles.imageContainer}>
                    {imageData}
                </View>
                <OutlinedButton name='camera' size={24} onPress={takeImage} color={Colors.primary100}>Camera</OutlinedButton>
            </View>
        </>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    imageFallbackText : {
        fontSize : 20,
        color : 'white',
    },
    imageContainer : {
        width : '100%',
        height : 200,
        marginVertical : 8,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.primary100
    },
    imageStyle : {
        width : '100%',
        height : '100%'
    }
})