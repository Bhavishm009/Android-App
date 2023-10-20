// FetchData.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useFetchDataQuery } from '../store/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';

const FetchData = () => {
  const { data, error, isLoading } = useFetchDataQuery();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error)
    return <Text>Error: {error.message}</Text>;
  }

  if (data) {
    return (
      <View>
        <Text>Data: {JSON.stringify(data)}</Text>
        
      </View>
    );
  }

  return null;
};

export default FetchData;
