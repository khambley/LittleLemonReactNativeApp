import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import MyTextComponent from './components/MyTextComponent';
import MenuItems from './components/MenuItems';
import ViewBoxesWithColorAndText from './ViewBoxesWithColorAndText';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Menu"
      screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{ title: 'Home' }} />
        <Stack.Screen name="Menu" component={MenuItems} />
      </Stack.Navigator>
    </NavigationContainer>
    //shorthand for react's new "Fragment" element
    //https://legacy.reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
    // <NavigationContainer>
    //    <>
    //   <View
    //   style={styles.container}>
    //     <LittleLemonHeader />
    //     {/* <ViewBoxesWithColorAndText /> */}
    //     <WelcomeScreen />
    //     {/* <MenuItems /> */}
    //     {/* <LoginScreen /> */}
    //     {/* <MyTextComponent /> */}
    //   </View>
    //   <View style={styles.footer}>
    //     <LittleLemonFooter />
    //   </View>
    // </>
    // </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  footer: { 
    backgroundColor: 'black' 
  }
});
