import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Contact() {
  const ConatctDetails = [
    {
      uid: 1,
      name: 'Abir Pal',
      imageURL:
        'https://testaeccc.web.app/static/media/AbirPal.d102802cf1c192e553d7.jpg',
      userStatus: 'Busy in Finding Bugs...',
    },
    {
      uid: 2,
      name: 'Saikat Mukherjee',
      imageURL:
        'https://testaeccc.web.app/static/media/SaikatMukherjee.f9669a6b2c0607628d24.jpg',
      userStatus: "API's are ready to be served",
    },
    {
      uid: 3,
      name: 'Pranay Gupta',
      imageURL:
        'https://testaeccc.web.app/static/media/PranayGupta.fd54d6dcd13257dbfb38.png',
      userStatus: 'Finding 3rd Party Packages',
    },
    {
      uid: 4,
      name: 'Soumya Banerjee',
      imageURL:
        'https://testaeccc.web.app/static/media/SoumyaBanerjee.12ad6683ca6b8d1b3e5a.jpg',
      userStatus: 'Frontend Done...',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingtext}>Contact</Text>

      <ScrollView style={styles.scrollableContainer}>
        {ConatctDetails.map((contact, i) => (
          <View
            key={i}
            style={[
              styles.contactCard,
              {borderTopColor: i === 0 ? 'transparent' : '#ffffff55'},
            ]}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: contact.imageURL,
                }}
                style={styles.userImage}
              />
            </View>
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.userStatus}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 3,
    marginVertical: 20,
  },
  headingtext: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  contactCard: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 0.5,
    borderColor: 'transparent',
    paddingVertical: 5,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  userStatus: {
    fontSize: 13,
  },
  scrollableContainer: {},
});
