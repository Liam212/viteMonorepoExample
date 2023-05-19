import React from 'react';
import {View, Text} from 'react-native';

function App() {
  return (
    <View>
      <Text>hello world</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}

export default App;
