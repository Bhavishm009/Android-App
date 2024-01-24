import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useAddPostMutation } from "../store/slices/postSlice";
import Button from "../components/Button";
const PostScreen = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [addPost] = useAddPostMutation();

  const handleAdd = async () => {
    if (newPostTitle.trim() !== "" && imageUri !== null) {
      const newPost = {
        description: newPostTitle,
        image: {
          uri: imageUri.assets[0].uri,  // Access uri from assets
          type: "image/jpeg", 
          name: "image.jpg", 
        },
      };
     let result = await addPost(newPost);
     console.log(result)
     if (result.data) {
       alert("Post added successfully!");
     }
      setNewPostTitle("");
      setImageUri(null);
    }
  };

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

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
      {imageUri && <Image source={{ uri: imageUri.assets[0].uri }} style={styles.image} />}
      <TouchableOpacity onPress={handleImagePicker}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={newPostTitle}
        onChangeText={(text) => setNewPostTitle(text)}
        placeholder="Enter post title"
      />
      <Button title="Add Post" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default PostScreen;
