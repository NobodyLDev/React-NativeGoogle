// src/components/HeaderComponent.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import IconButton from './IconButton';

const HeaderComponent = () => (
  <View style={styles.header}>
    <View style={styles.icons}>
      <Entypo name="menu" size={24} color="black" />
      <IconButton iconName="search1" />
      <IconButton iconName="shoppingcart" />
      <IconButton iconName="user-circle-o" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    // Adicione seus estilos para o header aqui
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default HeaderComponent;
