import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>😡</Text>
        </View>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>🥶</Text>
        </View>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>🤢</Text>
        </View>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>👿</Text>
        </View>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>🤡</Text>
        </View>
        <View style={[styles.card, styles.elevatdCards]}>
          <Text style={styles.cardText}>💀</Text>
        </View>
      </ScrollView>
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
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 8,
    backgroundColor: '#000',
  },
  elevatdCards: {
    borderRadius: 500,
    margin: 6,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#fff',
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  cardText: {
    fontSize: 34,
  },
});
