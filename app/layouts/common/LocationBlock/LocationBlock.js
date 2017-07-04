import React from 'react';
import { Text, View } from 'react-native';
import { wrapper } from './style';

const LocationBlock = ({ children }) => {
  return (
    <View style={wrapper}>
      <Text>
        {children}
      </Text>
    </View>
  );
};

export { LocationBlock };
