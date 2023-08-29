import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function WelcomeScreen() {

    const[firstName, onChangeFirstName] = useState('');
    const[lastName, onChangeLastName] = useState('');
    const[message, onChangeMessage] = useState('');

    return (
     <KeyboardAvoidingView style={welcomeStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView indicatorStyle={"white"} keyboardDismissMode="on-drag">
        <Text style={welcomeStyles.headerText}>
                Welcome to Little Lemon
        </Text>

        <Text style={welcomeStyles.bodyText}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>

        <TextInput 
            style={welcomeStyles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={'First Name'} />
        <TextInput 
            style={welcomeStyles.inputBox}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={'Last Name'} />
         <TextInput 
            style={welcomeStyles.messageBox}
            value={message}
            onChangeText={onChangeMessage}
            placeholder={'Please Leave Feedback'}
            multiline={true} />
        </ScrollView>
     </KeyboardAvoidingView>
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
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
      },
      messageBox: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
        textAlignVertical: 'top'
      },
  });