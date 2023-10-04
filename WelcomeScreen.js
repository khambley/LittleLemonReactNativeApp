import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert, Image, useColorScheme, useWindowDimensions} from 'react-native';

export default function WelcomeScreen() {
    const {width, height, fontScale} = useWindowDimensions();
    const colorScheme = useColorScheme(); // can return light, dark, or null
    const[firstName, onChangeFirstName] = useState('');
    const[lastName, onChangeLastName] = useState('');
    const[message, onChangeMessage] = useState('');

    return (
     <KeyboardAvoidingView 
     style={[welcomeStyles.container, 
        colorScheme === 'light'
        ? {backgroundColor: '#fff'} 
        : {backgroundColor: '#333333'}
      ]} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView indicatorStyle={"white"} keyboardDismissMode="on-drag">
        <View style={welcomeStyles.imageContainer}>
        <Image style={welcomeStyles.logo} source={require('./img/LittleLemonHeader.png')} />   
        </View>
        
        <Text style={welcomeStyles.headerText}>
                Welcome to Little Lemon
        </Text>
        <Text style={welcomeStyles.bodyText}>Color Scheme: {colorScheme}</Text>
        <Text style={welcomeStyles.bodyText}>Window Dimensions</Text>
        <Text style={welcomeStyles.bodyText}>Height: {height}</Text>
        <Text style={welcomeStyles.bodyText}>Width: {width}</Text>
        <Text style={welcomeStyles.bodyText}>FontScale: {fontScale}</Text>
        <Text style={welcomeStyles.bodyText}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            <View style={welcomeStyles.imageContainer}>
            <Image
                style={welcomeStyles.image}
                source={require('./img/Picture1.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Table with menu and napkin'}
            />
            <Image
                style={welcomeStyles.image}
                source={require('./img/Picture2.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Pan with seared salmon'}
            />
            <Image
                style={welcomeStyles.image}
                source={require('./img/Picture3.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Slicing a lemon'}
            />
            <Image
                style={welcomeStyles.image}
                source={require('./img/Picture4.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Steamed mussels and lemon wedge in a bowl'}
            />
            </View>
            
        <TextInput 
            style={welcomeStyles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={'First Name'}
            // onFocus={() => Alert.alert("First name is focused")}
            // onBlur={() => Alert.alert('First name is blurred')}
            clearButtonMode="always" /> 
            {/* clearButtonMode only available on iOS, need custom implementation on Android */}
        <TextInput 
            style={welcomeStyles.inputBox}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={'Last Name'}
            clearButtonMode="always" />
         <TextInput 
            style={welcomeStyles.messageBox}
            value={message}
            onChangeText={onChangeMessage}
            placeholder={'Please Leave Feedback'}
            multiline={false}
            clearButtonMode='always' />
        </ScrollView>
     </KeyboardAvoidingView>
    );
  }
  const welcomeStyles = StyleSheet.create({
    container: { 
        flex: 1,      
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    logo: {
        height: 100,
        width: 300,
        resizeMode: 'contain'
     },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    headerText: { 
        padding: 35, 
        color: 'black', 
        fontSize: 30,
        textAlign: 'center' 
    },
    bodyText: {
        fontSize: 26,
        padding: 5,
        marginVertical: 3,
        color: 'black',
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