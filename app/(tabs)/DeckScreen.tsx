import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useIAP } from './iapHandler'; // Import IAP logic

export default function DeckScreen({ navigation }) {
  const { requestSubscription } = useIAP(); // Hook for requesting subscription

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/new.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Ionicons name="settings-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => console.log('Info Button Pressed')}
        >
          <Ionicons name="information-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Use ScrollView to make the content scrollable */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Choose Deck Section */}
          <View style={styles.deckSection}>
            <Text style={styles.chooseDeckText}>Choose Deck</Text>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/partytime.png')} style={styles.deckImage} />
              <Image source={require('@/assets/images/food.png')} style={styles.deckImage} />

              <View style={styles.lockedDeck}>
                <Image source={require('@/assets/images/relationship.png')} style={styles.deckImage} />
                <Ionicons name="lock-closed" size={50} color="white" style={styles.lockIcon} />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.playButton, styles.lightBrownButton]}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.playButton, styles.lightGreenButton]}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buyButton, styles.lightPinkButton]}
                onPress={() => requestSubscription('your_subscription_product_id')}
              >
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.exploreButton}>
              <Ionicons name="lock-closed" size={20} color="white" style={styles.exploreIcon} />
              <Text style={styles.exploreButtonText}>Explore</Text>
              <Text style={styles.exploreButtonText}>Premium Decks</Text>
            </TouchableOpacity>

            {/* Filters Text */}
            <Text style={styles.filtersText}>Filters</Text>

            {/* Additional Buttons Section */}
            <View style={styles.additionalButtonContainer}>
              <TouchableOpacity style={[styles.additionalButton, styles.funnyButton]}>
                <Ionicons name="happy-outline" size={20} color="white" style={styles.additionalButtonIcon} />
                <Text style={styles.additionalButtonText}>Funny</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.additionalButton, styles.awkwardButton]}>
                <Ionicons name="person-outline" size={20} color="white" style={styles.additionalButtonIcon} />
                <Text style={styles.additionalButtonText}>Awkward</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.additionalButton, styles.adultButton]}>
                <Ionicons name="leaf-outline" size={20} color="white" style={styles.additionalButtonIcon} />
                <Text style={styles.additionalButtonText}>Adult</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  settingsButton: { position: 'absolute', top: 60, left: 20 },
  infoButton: { position: 'absolute', top: 60, right: 20 },
  scrollContainer: {
    flexGrow: 1, // Allows scrolling when content is larger than the viewport
    justifyContent: 'flex-start', // Aligns items to the top
    alignItems: 'center', // Centers items horizontally
    paddingTop: 100, // Adds space for the settings and info buttons
  },
  deckSection: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20, // Space below the settings and info button
  },
  chooseDeckText: { fontSize: 40, color: '#fff', fontWeight: 'bold', marginBottom: 30 },
  imageContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  deckImage: { width: 100, height: 150, marginHorizontal: 10, borderRadius: 15 },
  lockedDeck: { position: 'relative' },
  lockIcon: { position: 'absolute', top: '30%', left: '30%' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '90%' },
  playButton: { borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 10 },
  lightBrownButton: { backgroundColor: '#D2B48C' },
  lightGreenButton: { backgroundColor: '#90EE90' },
  buyButton: { borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 10 },
  lightPinkButton: { backgroundColor: '#FFB6C1' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  exploreButton: { flexDirection: 'row', backgroundColor: '#001f3f', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginTop: 20, alignItems: 'center' },
  exploreButtonText: { color: '#fff', fontSize: 25, fontWeight: 'bold', marginLeft: 10 },
  exploreIcon: { marginRight: 10 },
  filtersText: { 
    fontSize: 30, 
    color: '#fff', 
    marginTop: 20, 
    textTransform: 'uppercase', 
    textAlign: 'left',
  },
  additionalButtonContainer: {
    marginTop: 40, 
    width: '90%', 
    alignItems: 'center', 
  },
  additionalButton: { 
    flexDirection: 'row', 
    borderRadius: 10, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    marginVertical: 10, 
    width: '100%', 
    alignItems: 'center', 
  },
  funnyButton: { backgroundColor: '#004D00' },
  awkwardButton: { backgroundColor: '#FFB6C1' },
  adultButton: { backgroundColor: '#FFCCCB' },
  additionalButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginLeft: 10 
  },
  additionalButtonIcon: { 
    marginRight: 10 
  },
});
