import {View, Text, StyleSheet} from 'react-native'

function SecondPage({route, navigation}){

    const data = route.params;
    const data1 = data.name;
    const data2 = data.age;
    const data3 = data.soccerYear;

    return(
        <>
            <View style={st.container}>
                <Text style={st.textSt}>Name : {data1}</Text>
                <Text style={st.textSt}>age : {data2}</Text>
                <Text style={st.textSt}>Corrier : {data3}</Text>
            </View>
        </>
    )
}

export default SecondPage;

const st = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#aa14'
    },
    textSt : {
        textAlign : 'center'
    }
})