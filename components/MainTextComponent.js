// src/components/MainTextComponent.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainTextComponent = () => (
  <View style={styles.mainTextContainer}>
    <Text style={styles.mainText}>Shop the latest deals.</Text>
  </View>
);

const styles = StyleSheet.create({
  mainTextContainer: {
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainTextComponent;
