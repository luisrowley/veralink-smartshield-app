import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WarningScreen = () => {
    return (
      <View style={styles.container}>
        <Icon name="exclamation-triangle" size={100} color="#568" />
        <Text style={styles.warningText}>The page could not be verified against Phishing</Text>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    warningText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default WarningScreen;
