import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardVisit = ({ photo, name, surname, email, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name} {surname}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 8,
  },
  imageContainer: {
    marginRight: 16,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
  },
});

export default CardVisit;
