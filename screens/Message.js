import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  }
];

const Message = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chat", { userName: item.userName })
            }
          >
            <View style={styles.messageContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.userImg} style={styles.userImage} />
              </View>
              <View style={styles.messageContent}>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.messageTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  messageContent: {
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  userName: {
    fontWeight: "bold",
  },
  messageTime: {
    color: "#888",
  },
  messageText: {
    fontSize: 16,
  },
});

export default Message;
