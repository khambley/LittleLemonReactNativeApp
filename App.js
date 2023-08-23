import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';


export default function App() {
  return (
    //shorthand for react's new "Fragment" element
    //https://legacy.reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
    <>
      <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ 
        backgroundColor: '#495E57' 
      }}>
        <LittleLemonFooter />
      </View>

    </>
    
  
  );
}
