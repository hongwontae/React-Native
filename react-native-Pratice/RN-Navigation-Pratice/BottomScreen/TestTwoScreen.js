import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

function TestTwoScreen({ route, navigation }) {
  const [getData, setGetData] = useState([]);

  let titleName = route?.params?.amount;

  if (!titleName) {
    titleName = "Test-Two";
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: titleName,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    });
  }, [titleName]);

  useEffect(() => {
    async function getAllItem() {
      const response = await fetch("http://172.30.1.72:5000/get/all/item");
      const resData = await response.json();
      setGetData(resData.data);
    }
    getAllItem();
  }, []);

  async function DeleteHandler(id){
    const response = axios.post('http://172.30.1.72:5000/delete/remove/item', {id : id});

    const resData = response;
    console.log(resData);
  }

  async function updateMoveHandler(params) {
    
  }

  return (
    <>
      <Text style={styles.titleStyle}>Test Two Screen</Text>
      <ScrollView style={styles.allContainer}>
        {getData &&
          getData.map((ele) => {
            const formattedDate = new Date(ele.date).toISOString().slice(0, 10);

            return (
              <View style={styles.itemContainer} key={ele.id}>
                <Text>Amount : {ele.amount}</Text>
                <Text>Date : {formattedDate}</Text>
                <Text>Description : {ele.description}</Text>
                <Button title="Delete" onPress={()=>DeleteHandler(ele.id)}></Button>
              </View>
            );
          })}
      </ScrollView>
    </>
  );
}

export default TestTwoScreen;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
  },
  itemContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    gap : 5,
    flexWrap : 'wrap'
  },
  allContainer : {
    flexDirection : 'column',
    gap : 10
  }
});

