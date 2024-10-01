// src/components/MiniHeaderComponent.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiniHeaderComponent = () => (
  <View style={styles.miniHeader}>
    <Text style={styles.miniHeaderItem}>All offers</Text>
    <Text style={styles.miniHeaderItem}>Phones</Text>
  </View>
);

const styles = StyleSheet.create({
  miniHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  miniHeaderItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MiniHeaderComponent;
