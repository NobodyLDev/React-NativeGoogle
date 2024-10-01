// src/components/IconButton.js

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const IconButton = ({ iconName, onPress }) => (
  <TouchableOpacity style={styles.iconItem} onPress={onPress}>
    <AntDesign name={iconName} size={24} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconItem: {
    padding: 10,
  },
});

export default IconButton;
