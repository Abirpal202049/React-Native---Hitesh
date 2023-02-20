import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCrads from './components/FancyCrads';
import ActionCard from './components/ActionCard';
import Contact from './components/Contact';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCrads/>
        <Contact/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
