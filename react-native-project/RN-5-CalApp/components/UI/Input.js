import {View, TextInput, Text, StyleSheet} from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function Input({label, textInputConfig, style, onChange, value}){

    const inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }


    return(
        <View style={[styles.inputContainer,style ]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput onChangeText={onChange} style={inputStyles} {...textInputConfig} value={value}></TextInput>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer : {
        marginHorizontal : 8,
        marginVertical : 8,
    },
    label : {
        textAlign : 'center',
        fontSize : 16,
        color : 'white',
        fontWeight : 'bold'
    },
    input : {
        backgroundColor : GlobalStyles.colors.primary100,
        color : 'black',
        borderRadius : 8,
        padding : 2
    },
    inputMultiline : {
        minHeight : 100,
        textAlignVertical : 'top'
    }
})