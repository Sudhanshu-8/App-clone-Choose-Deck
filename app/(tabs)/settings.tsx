// File: SettingsScreen.js or SettingsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the icons

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/new.png')} // Use the same background image as the HomeScreen
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark blue strip at the top */}
        <View style={styles.header}>
          <Ionicons name="settings-outline" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.headerText}>SETTINGS</Text>
          <View style={styles.emptySpace} />
        </View>

        {/* Music Button */}
        <TouchableOpacity style={styles.musicButton}>
          <Ionicons name="musical-notes" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Information Button */}
        <TouchableOpacity style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Large Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.largeButton, styles.languagesButton]}>
            <Text style={styles.buttonText}>Languages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.largeButton, styles.kidModeButton]}>
  <View style={styles.kidModeContainer}>
    <Ionicons name="star" size={20} color="black" style={styles.kidModeIcon} />
    <Text style={styles.buttonText}>Kid Mode</Text>
    <Ionicons name="toggle-outline" size={35} color="#fff" style={styles.toggleIcon} />
  </View>
</TouchableOpacity>

          <TouchableOpacity style={[styles.smallButton, styles.purchasesButton]}>
            <Text style={styles.buttonText}>$ Purchases</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.moreGamesButton}>
        <Ionicons name="game-controller" size={20} color="white" />
          <Text style={styles.buttonText2}>More Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.followUsButton}>
        <Ionicons name="rocket" size={20} color="white"  style={{ transform: [{ rotate: '315deg' }] }} />
          <Text style={styles.buttonText2}>Follow Us</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the screen takes up full space
  },
  backgroundImage: {
    flex: 1, // Makes the background image cover the whole screen
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#001f3f', // Dark blue color
    height: 80, // Height of the strip
    flexDirection: 'row', // Use row layout for icon and text
    alignItems: 'center', // Center items vertically
    position: 'absolute', // Position the header absolutely
    top: 80, // Position the header 80 pixels from the top
    left: 0, // Align left
    right: 0, // Align right
    paddingHorizontal: 10, // Add some horizontal padding
  },
  headerText: {
    color: '#fff', // White text color
    fontSize: 28, // Font size for the header text
    flex: 1, // Take up available space to center the text
    textAlign: 'center', // Center the text horizontally
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  emptySpace: {
    width: 24, // This can be adjusted as needed
  },
  musicButton: {
    position: 'absolute', // Position it absolutely
    top: 200, // Position below settings icon (80 + 20)
    left: 20, // Align it to the left side
    backgroundColor: '#001f3f', // Match the strip color
    borderRadius: 30, // Make it round
    padding: 10, // Padding inside the circle
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  infoButton: {
    position: 'absolute', // Position it absolutely
    top: 200, // Position 200 pixels from the top
    right: 20, // Align it to the right side
    backgroundColor: '#001f3f', // Match the strip color
    borderRadius: 30, // Make it round
    padding: 10, // Padding inside the circle
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  buttonContainer: {
    position: 'absolute', // Positioning for the button container
    top: 340, // Position the buttons 340 pixels below the settings header
    left: 0, // Align left
    right: 0, // Align right
    alignItems: 'center', // Center buttons horizontally
  },
  largeButton: {
    backgroundColor: 'lightgreen', // Color for the Languages button
    borderRadius: 20, // Rounded corners
    paddingVertical: 25, // Increase vertical padding for larger buttons
    paddingHorizontal: 30, // Horizontal padding
    marginVertical: 10, // Space between buttons
    width: '80%', // Width of the buttons
    alignItems: 'flex-start', // Align text to the left
  },
  kidModeButton: {
    backgroundColor: '#FFA500', // Color for the Kid Mode button (light orange)
    borderRadius: 20, // Rounded corners
    paddingVertical: 20, // Slightly smaller vertical padding than the Languages button
    paddingHorizontal: 30, // Horizontal padding
    marginVertical: 10, // Space between buttons
    width: '80%', // Width of the buttons
    alignItems: 'flex-start', // Align text to the left
  },
  purchasesButton: {
    backgroundColor: 'darkgreen', // Dark green color for the Purchases button
    borderRadius: 20, // Rounded corners
    paddingVertical: 15, // Smaller vertical padding for the Purchases button
    paddingHorizontal: 30, // Horizontal padding
    marginVertical: 10, // Space between buttons
    width: '80%', // Width of the buttons
    alignItems: 'flex-start', // Align text to the left
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 20, // Font size for button text
    textTransform: 'uppercase', // Make text uppercase
  },
  kidModeContainer: {
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center icon and text vertically
  },
  kidModeIcon: {
    marginRight: 10, // Space between icon and text
  },
  moreGamesButton: {
    flexDirection: 'row',
    position: 'absolute', // Position it absolutely
    bottom: 20, // Position from the bottom
    left: 20, // Align it to the left side
    backgroundColor: '#001f3f', // Dark blue color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 10, // Horizontal padding
    alignItems: 'center', // Center text
  },
  followUsButton: {
    flexDirection: 'row',
    position: 'absolute', // Position it absolutely
    bottom: 20, // Position from the bottom
    right: 20, // Align it to the right side
    backgroundColor: '#001f3f', // Dark blue color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 10, // Horizontal padding
    alignItems: 'center', // Center text
  },
  buttonText2: {
    color: '#fff', // Text color
    fontSize: 16, // Font size for button text
    marginLeft: 10, // Space between the icon and text
  },
  toggleIcon: {
    marginLeft: 90, // Space between the text and toggle icon
  },
  
});
