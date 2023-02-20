import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type BlogData = {
  data: {
    heading: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
    cardColor: string;
    textColor: string;
  };
};

export default function ActionSingleCard(props: BlogData) {
  const {heading, description, imageUrl, readMoreLink, cardColor, textColor} = props.data;

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View
      style={[
        styles.card,
        styles.elevatedCard,
        {
          backgroundColor: cardColor,
        },
      ]}>
      {/* Header */}
      <View style={styles.headerContaier}>
        <Text style={[styles.headerText, {color: textColor}]}>{heading}</Text>
      </View>

      {/* Image */}
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.cardImage}
      />

      {/* Card Details */}
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3} style={{color: textColor, fontSize : 13}}>
          {description}
        </Text>
      </View>

      {/* Footer Container */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => openWebsite(readMoreLink)}>
          <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.socialLinks}>Let's Learn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginVertical: 15,
    marginHorizontal: 8,
    borderRadius: 10,
    paddingBottom: 10,
  },
  elevatedCard: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#758283',
  },
  headerContaier: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 150,
    resizeMode: 'cover',
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  socialLinks: {
    color: '#fff',
    backgroundColor: '#242B2E',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 5,
    fontWeight: '500',
    shadowColor: '#000',
  },
});
