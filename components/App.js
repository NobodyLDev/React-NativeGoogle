// src/App.js

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import MainTextComponent from './components/MainTextComponent';
import MiniHeaderComponent from './components/MiniHeaderComponent';
import ProductComponent from './components/ProductComponent';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent />
      <MainTextComponent />
      <MiniHeaderComponent />
      {/* Adicione os produtos aqui */}
      <ProductComponent imageUri="https://example.com/image1.jpg" description="Product 1" />
      <ProductComponent imageUri="https://example.com/image2.jpg" description="Product 2" />
      {/* Continue adicionando mais produtos conforme necessário */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
