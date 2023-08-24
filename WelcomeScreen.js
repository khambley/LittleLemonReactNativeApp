import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return (
     <View style={welcomeStyles.container}>
        <ScrollView indicatorStyle={"white"}>
        <Text style={welcomeStyles.headerText}>
                Welcome to Little Lemon
        </Text>

        <Text style={welcomeStyles.bodyText}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
     </View>
    );
  }
  const welcomeStyles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    headerText: { 
        padding: 35, 
        color: 'white', 
        fontSize: 30,
        textAlign: 'center' 
    },
    bodyText: {
        fontSize: 26,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
  });