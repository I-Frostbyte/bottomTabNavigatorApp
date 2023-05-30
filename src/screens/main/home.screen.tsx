import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Pressable, Text, View} from 'native-base';
import React from 'react';

const Home = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text fontSize="5xl" bold textAlign="center">
          Home Screen
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
