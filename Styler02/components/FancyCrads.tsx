import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCrads() {
  const Gallary = [
    "https://images8.alphacoders.com/991/991715.jpg",
    "https://images.pexels.com/photos/6753742/pexels-photo-6753742.jpeg",
    "https://www.topasiatour.com/pic/india/city/agra/attractions/taj-mahal-4.jpg",
    "https://www.camelsandchocolate.com/wp-content/uploads/2011/11/taj-mahal-14.jpg",
    "https://external-preview.redd.it/sh9dmzZqJXyn51kqnSwuOhjLJKf5t6Fbpb8J78qyc9U.jpg?auto=webp&s=d583f9ccd209d0121170634c518f342ece9711bf",
    "https://i.imgur.com/l4cQzZJ.jpg",
  ]
  return (
    <View>
      <Text style={styles.headingtext}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://free4kwallpapers.com/uploads/originals/2020/07/18/taj-mahal-agra-india-wallpaper.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLable}>Agra, Delhi</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in the Indian city of Agra. It was commissioned
            in 1631 by the Mughal emperor Shah Jahan to house the tomb of his
            favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan
            himself
          </Text>
          <View style={{
            flex : 1,
            flexWrap : 'wrap',
            flexDirection : 'row',
            justifyContent : 'space-between',
            gap : 4
          }}>
            {Gallary.map((image, index) => (
              <View key={index}>
                <Image
                  source={{
                    uri : image
                  }}
                  style={{
                    width : 100,
                    height : 100,
                  }}
                />
              </View>
            ))}
          </View>
          <Text style={styles.cardFooter}>30 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    // width: 320,
    // height: 400,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingBottom : 15
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#fff',
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // justifyContent : 'space-around'
  },
  cardTitle: {
    color: '#1f1f1f',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardLable: {
    color: '#1f1f1f',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 5,
  },
  cardFooter: {
    color: '#758283',
    fontSize: 10,
    marginTop : 10
  },
});
