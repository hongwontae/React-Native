import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(title, color, navigation, id) {
    return (
      <CategoryGridTitle
        title={title}
        color={color}
        navigation={navigation}
        id={id}
      ></CategoryGridTitle>
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return renderCategoryItem(
            item.title,
            item.color,
            navigation,
            item.id
          );
        }}
        numColumns={2}
      ></FlatList>
    </>
  );
}

export default CategoriesScreen;
