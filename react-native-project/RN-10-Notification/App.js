import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View, Platform } from "react-native";
import * as Notification from "expo-notifications";
import { useEffect } from "react";

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    async function configurePushNotification() {
      const { status } = await Notification.getPermissionsAsync();

      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notification.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required",
          "Push Notification need the approraite permissions"
        );
        return;
      }
      const pushToken = await Notification.getExpoPushTokenAsync({
        projectId : ''
      });
      console.log(pushToken);

      if(Platform.OS === 'android'){
        await Notification.setNotificationChannelAsync('default', {
          name : 'default',
          importance : Notification.AndroidImportance.DEFAULT,
        });
      }
    }
    configurePushNotification();
  }, []);

  useEffect(() => {
    const subscription1 = Notification.addNotificationReceivedListener(
      ({ date, request }) => {
        console.log("Notification Received");
        console.log(date);
        console.log(request.content.data);
      }
    );

    const subscription2 = Notification.addNotificationResponseReceivedListener(
      ({ notification }) => {
        console.log(notification.request.content.data);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  async function permissionRequestHandler() {
    const { status } = await Notification.getPermissionsAsync();

    if (status !== "granted") {
      const { status: newStatus } =
        await Notification.requestPermissionsAsync();
      if (newStatus !== "granted") {
        Alert.alert("failed to get push token for push notification!");
        return;
      }
    }
  }

  async function notificationHandler() {
    await permissionRequestHandler();
    await Notification.scheduleNotificationAsync({
      content: {
        title: "My First Notification",
        body: "Notification Hello",
        data: { hwt: "HWT" },
      },
      trigger: {
        seconds: 10,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Notification" onPress={notificationHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
