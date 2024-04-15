import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryGridTile";

function CategoriesScreens({ navigation }) {
  function renderCategoryItem(renderItem) {
    function pressHandler() {
      navigation.navigate("MealsOverView",{
        categoryId : renderItem.item.id,
      });
    }
    return (
      <CategoryTile
        color={renderItem.item.color}
        title={renderItem.item.title}
        onPress={pressHandler}
      ></CategoryTile>
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        style={{ marginTop: 20 }}
      ></FlatList>
    </>
  );
}

export default CategoriesScreens;
