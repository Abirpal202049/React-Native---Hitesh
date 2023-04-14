import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

// Form Validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, 'Should be min of 4 charecter').max(16, 'Should be a max of 16 charecter').required('Length is required')
});

export default function App() {

  const [password, setPassword] = useState("")
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowercase, setLowercase] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)




  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
