// FetchData.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useFetchDataQuery } from "../store/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";

const FetchData = () => {
  const { data, error, isLoading } = useFetchDataQuery();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error);
    return <Text>Error: {error}</Text>;
  }

  if (data) {
    return (
      <View>
        {/* <Text>Data: {JSON.stringify(data.data)}</Text> */}
        {data.data &&
          data.data.map((element) => {
            return (
              <View key={element._id} style={{ margin: 10 }}>
                <Text>{element._id}</Text>
                <Text>{element.name}</Text>
              </View>
            );
          })}
      </View>
    );
  }

  return null;
};

export default FetchData;
