import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useGetPostsQuery } from "../store/slices/postSlice";
import COLORS from "../constants/colors";

const Timeline = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.postCard}>
          <Image source={{ uri: item.image }} style={styles.postImage} />
          <Text style={styles.postDescription}>{item.description}</Text>
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postCard: {
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: 10,
  },
  actionText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});

export default Timeline;
