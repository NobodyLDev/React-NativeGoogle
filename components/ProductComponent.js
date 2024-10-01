// src/components/ProductComponent.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProductComponent = ({ imageUri, description }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: imageUri }} style={styles.productImage} />
    <Text style={styles.productDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  productCard: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productDescription: {
    padding: 10,
    textAlign: 'center',
  },
});

export default ProductComponent;
