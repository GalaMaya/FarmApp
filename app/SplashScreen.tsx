import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GalaMaya Studio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%', // Tinggi layar penuh
    backgroundColor: '#4a90e2', // Warna latar belakang splash screen
    justifyContent: 'center', // Posisi vertikal di tengah
    alignItems: 'center', // Posisi horizontal di tengah
  },
  text: {
    fontSize: 32, // Ukuran teks besar
    fontWeight: 'bold', // Teks tebal
    color: '#ffffff', // Warna teks putih
    letterSpacing: 2, // Memberi jarak antar huruf
    textTransform: 'uppercase', // Membuat teks menjadi huruf kapital
  },
});

export default SplashScreen;
