import React from 'react';
import { View,SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import logo from '../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />

      <View>
        <View>
          <Image source={{ uri: '' }} />
          <View>
            <Text> Nome </Text>
            <Text> Descrição </Text>
          </View>
        </View>
      </View>

      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
