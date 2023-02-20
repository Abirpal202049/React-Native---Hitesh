import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>🤢</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>😡</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>🥶</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
    backgroundColor: '#000',
  },
  cardText: {
    fontSize: 34,
  },
  cardOne: {
    backgroundColor: '#DE4839',
  },
  cardTwo: {
    backgroundColor: '#23C4ED',
  },
  cardThree: {
    backgroundColor: '#38CC77',
  },
});
