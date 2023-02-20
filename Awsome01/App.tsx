import React from 'react';

import {View, Text, SafeAreaView, Button, Image} from 'react-native';

// View -> div

function App() {
  return (
    <SafeAreaView>
      <View>
        <Button title="Hello Buddy" color="#000" />
        <Text>Hello World</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          voluptas reiciendis at provident qui, consequatur consectetur
          praesentium quidem corporis inventore.
        </Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
