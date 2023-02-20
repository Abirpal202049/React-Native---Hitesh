import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkmode = useColorScheme() === 'dark';
  const colorScheme = useColorScheme();

  // ? useColorScheme is a ReactHook which provide the color scheme of the user

  // colorScheme === light -> (l === d) isDarkMode = False ->  greenText
  // colorScheme === dark -> (d === d) isDarkMode = True ->  redText

  return (
      <View style={styles.container}>
        <Text style={isDarkmode ? styles.redText : styles.greenText}>Hello Everyone!</Text>
        <Text>Hi Buddy</Text>
        <Text>useColorScheme(): {colorScheme}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    redText : {
        color : '#ff0000',
        fontWeight : '800'
    },
    greenText : {
        color : '#00ff00',
        fontWeight : '800'
    }
})

export default AppPro;