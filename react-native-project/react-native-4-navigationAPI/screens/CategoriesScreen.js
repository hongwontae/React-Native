import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryGridTile";

function CategoriesScreens() {
  function renderCategoryItem(renderItem) {
    console.log(renderItem.item);
    return (
      <CategoryTile
        color={renderItem.item.color}
        title={renderItem.item.title}
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
        ></FlatList>
    </>
  );
}

export default CategoriesScreens;
