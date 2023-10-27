import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useAddPostMutation } from "../store/slices/postSlice"
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
const PostScreen = ({navigation}) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [addPost] = useAddPostMutation();

  const handleAdd = async () => {
    if (newPostTitle.trim() !== "" && imageUri !== null) {
      const newPost = {
        description: newPostTitle,
        image: {
          uri: imageUri.assets[0].uri, // Access uri from assets
          type: "image/jpeg",
          name: "image.jpg",
        },
      };
      const postResponse = await addPost(newPost);
       if(postResponse?.data?.Success){ 
        setNewPostTitle("");
        setImageUri(null)
        navigation.navigate("Timeline")
      }
    }
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setImageUri(pickerResult);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write your post here"
        value={newPostTitle}
        onChangeText={(text) => setNewPostTitle(text)}
        style={styles.textInput}
      />
      {imageUri && (
        <Image source={{ uri: imageUri.assets[0].uri }} style={styles.image} />
      )}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon
            name="camera"
            onPress={handleImagePicker}
            size={30}
            color="lightblue"
            style={styles.icon}
          />
        </TouchableOpacity>
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
      <Text> Post</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 2,           // Border width
    borderColor: 'grey',     // Border color
    borderStyle: 'solid'
  },
  image: {
    width: "100%",
    height: "50%",
    marginBottom: 10,
  },
  Btn: {
    marginTop: 10,
  },
  textInput: {
    height: 50,
    width: "100%",
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  uploadButton: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  text:{
    color:"white"
  },
  addButton: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    width:"50%",
    height:"100%",
    color:"white",
    paddingVertical: 10,
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
});
export default PostScreen;
