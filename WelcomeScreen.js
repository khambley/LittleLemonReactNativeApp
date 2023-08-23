import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return (
     <View style={{ flex: 1 }}>
        <ScrollView indicatorStyle={"white"}>
        <Text style={{ padding: 40, 
                       color: 'white', 
                       fontSize: 50,
                       textAlign: 'center' }}>
                Welcome to Little Lemon
        </Text>

        <Text style={{
                fontSize: 38,
                padding: 20,
                marginVertical: 8,
                color: '#EDEFEE',
                textAlign: 'center',
                }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ScrollView>
     </View>
    );
  }