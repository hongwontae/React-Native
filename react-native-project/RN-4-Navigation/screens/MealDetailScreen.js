import { Text, View } from "react-native";

function MealDetailScreen({route}){

    const mealId = route.params.mealId;

    return(
        <>
            <View>  
                <Text>{mealId}</Text>
            </View>
        </>
    )
}

export default MealDetailScreen;