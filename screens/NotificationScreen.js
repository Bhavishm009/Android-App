import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const notifications = [
  {
    id: 1,
    text: 'You have a new message',
    seen: true,
    userImg: require('../assets/users/user-1.jpg'), // Replace with actual image path
  },
  {
    id: 2,
    text: 'You have a friend request',
    seen: false,
    userImg: require('../assets/users/user-2.jpg'), // Replace with actual image path
  },
 
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.notification, item.seen ? styles.seen : styles.unseen]}>
            <Image source={item.userImg} style={styles.profileImage} />
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // To make it a circle
  },
  notificationTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  notificationText: {
    fontSize: 16,
  },
  seen: {
    backgroundColor: '#f0f0f0', // Seen notifications have a light background color
  },
  unseen: {
    backgroundColor: '#fff', // Unseen notifications have a white background color
    borderWidth: 1,
    borderColor: '#ccc', // Add a border for better visibility
  },
});

export default NotificationScreen;
