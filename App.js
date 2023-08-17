import * as React from 'react';
import { View } from 'react-native';

//Import a local component here
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonContent from './components/LittleLemonContent';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
    return (
    <View style={{
      flex: 1,
      backgroundColor: '#495E57',
    }}>
      <LittleLemonHeader />
      <LittleLemonContent />
      <LittleLemonFooter />
    </View>
    );
}