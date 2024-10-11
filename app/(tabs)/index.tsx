import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation

export default function HomeScreen() {
  const navigation = useNavigation();  // Get the navigation object

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/new.png')} // Path to your background image
        style={styles.backgroundImage}
        resizeMode="cover" // Ensure the image covers the entire background
      >
        {/* Settings Icon */}
        <Ionicons 
          name="settings-outline" // Icon name
          size={30} // Icon size
          color="#fff" // Icon color
          style={styles.settingsIcon} // Style for positioning
          onPress={() => navigation.navigate('settings')} // Navigate to the 'Settings' screen
        />

        {/* Text in the center */}
        <View style={styles.textContainer}>
          <Text style={styles.never}>NEVER</Text>
          <Text style={styles.have}>HAVE I</Text>
          <Text style={styles.ever}>EVER</Text>
        </View>

        {/* Buttons Container */}
        <View style={styles.buttonContainer}>
          {/* Play Button */}
          <TouchableOpacity
            style={[styles.button, styles.playButton]} // Add specific style for Play button
            onPress={() => navigation.navigate('DeckScreen')}
          >
            <Ionicons name="play" size={24} color="#fff" />
            <Text style={styles.buttonText}>PLAY</Text>
          </TouchableOpacity>

          {/* Multiplayer Button */}
          <TouchableOpacity style={[styles.button, styles.multiplayerButton]}>
            <Ionicons name="people" size={24} color="#fff" />
            <Text style={styles.buttonText}>MULTIPLAYER</Text>
          </TouchableOpacity>

          {/* How to Play Button */}
          <TouchableOpacity style={[styles.button, styles.howToPlayButton]}>
            <Ionicons name="help-circle-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>HOW TO PLAY</Text>
          </TouchableOpacity>
        </View>

        {/* More Games Button */}
        <View style={styles.moreGamesContainer}>
          <Ionicons name="game-controller" size={20} color="#fff" style={styles.pacmanIcon} />
          <TouchableOpacity style={styles.moreGamesButton}>
            <Text style={styles.moreGamesText}>More Games</Text>
          </TouchableOpacity>
        </View>

        {/* Follow Us Button on the Left */}
        <View style={styles.jetButtonContainer}>
          <Ionicons name="rocket" size={20} color="#fff" style={{ transform: [{ rotate: '315deg' }] }} />
          <TouchableOpacity style={styles.followUsButton}>
            <Text style={styles.followUsText}>Follow Us</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
  },
  backgroundImage: {
    flex: 1, // Ensures the background image covers the full screen
    width: '100%', // Full width of the screen
    height: '100%', // Full height of the screen
  },
  settingsIcon: {
    position: 'absolute', // Position it absolutely
    top: 60, // Distance from the top
    right: 20, // Distance from the right
  },
  textContainer: {
    position: 'absolute', // Position text absolutely
    top: 80, // 80 units from the top
    left: '40%', // Center horizontally
    transform: [{ translateX: -50 }], // Offset to center properly
    alignItems: 'center', // Center items vertically
  },
  never: {
    color: 'green', // Color for "NEVER"
    fontSize: 60, // Font size for "NEVER"
    textDecorationLine: 'underline', // Underline the text
    marginBottom: 10, // Gap between "NEVER" and "HAVE I"
  },
  have: {
    color: 'white', // Color for "HAVE I"
    fontSize: 50, // Font size for "HAVE I"
    textDecorationLine: 'underline', // Underline the text
    marginBottom: 10, // Gap between "HAVE I" and "EVER"
  },
  ever: {
    color: 'lightpink', // Color for "EVER"
    fontSize: 45, // Font size for "EVER"
    textDecorationLine: 'underline', // Underline the text
  },
  buttonContainer: {
    position: 'absolute', // Position buttons absolutely
    top: 350, // Position buttons below "EVER" (adjust as needed)
    left: '40%', // Center horizontally
    transform: [{ translateX: -50 }], // Offset to center properly
    alignItems: 'center', // Center buttons vertically
  },
  button: {
    borderRadius: 20, // Rounded corners
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    marginVertical: 10, // Space between buttons
    width: 200, // Fixed width for all buttons
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center icon and text vertically
  },
  playButton: {
    backgroundColor: '#28a745', // Green color for Play button
  },
  multiplayerButton: {
    backgroundColor: '#FFA500', // Light orange color for Multiplayer button
  },
  howToPlayButton: {
    backgroundColor: '#FFD700', // Light yellow color for How to Play button
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 20, // Font size for button text
    marginLeft: 10, // Space between icon and text
    textTransform: 'uppercase', // Make text uppercase
  },
  moreGamesContainer: {
    position: 'absolute', // Position it in the corner
    bottom: 35, // Distance from the bottom
    right: 20, // Distance from the right
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center icon and text vertically
  },
  moreGamesButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent background color
    borderRadius: 20, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 15, // Horizontal padding
  },
  moreGamesText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size for "More Games"
    textTransform: 'uppercase', // Make text uppercase
  },
  pacmanIcon: {
    marginRight: 5, // Space between icon and text
  },
  jetButtonContainer: {
    position: 'absolute', // Position it in the corner
    bottom: 35, // Distance from the bottom
    left: 20, // Distance from the left
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center icon and text vertically
  },
  followUsButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent background color
    borderRadius: 15, // Rounded corners
    paddingVertical: 8, // Smaller vertical padding
    paddingHorizontal: 10, // Smaller horizontal padding
  },
  followUsText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size for "Follow Us"
    textTransform: 'uppercase', // Make text uppercase
  },
});
