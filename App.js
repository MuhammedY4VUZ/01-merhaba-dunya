import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [renkIndex, setRenkIndex] = useState(0);
  const renkler = ['#2f6fed', '#22a06b', '#e2a400', '#c9372c', '#7b4fd6'];

  const temaDegistir = () => {
    setRenkIndex((prev) => (prev + 1) % renkler.length);
  };

  const aktifRenk = renkler[renkIndex];

  return (
    <View style={styles.container}>
      <View style={[styles.kart, { borderTopColor: aktifRenk }]}>
        <Text style={[styles.baslik, { color: aktifRenk }]}>Merhaba Dünya!</Text>
        <Text style={styles.altBaslik}>İlk Expo uygulamam başarıyla çalışıyor.</Text>
        
        <View style={styles.bilgiKutusu}>
          <Text style={styles.bilgiYazi}>📌 Kurs: DOT311 Mobil Oyun Arayüz Geliştirme</Text>
          <Text style={styles.bilgiYazi}>🚀 Hafta: 1. Hafta Kurulum ve Temeller</Text>
          <Text style={styles.bilgiYazi}>📱 Test: Expo Go ile Telefondan Çalıştırıldı</Text>
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.buton, 
            { backgroundColor: aktifRenk },
            pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] }
          ]}
          onPress={temaDegistir}
        >
          <Text style={styles.butonYazi}>Rengi Değiştir (Hızlı Yenilemeyi Dene)</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  kart: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 16,
    borderTopWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  baslik: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  altBaslik: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  bilgiKutusu: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    gap: 8,
  },
  bilgiYazi: {
    fontSize: 14,
    color: '#334155',
  },
  buton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  butonYazi: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
