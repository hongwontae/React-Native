import {View, Text, StyleSheet} from 'react-native'

function RenderCom({title}){

    console.log(title)

    return(
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
    
}

export default RenderCom;

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        color : 'red'
    }
})