import * as React from 'react';
import { View, Text} from 'react-native';

export default function LittleLemonHeader() {
    return (
       <View style={{ 
            flex: 1, 
            backgroundColor: 'yellow',
         }}>
        <Text style={{ 
            padding: 50, 
            fontSize: 30,
            color: 'black',
            textAlign: 'center' }}>
            Little Lemon
        </Text>
       </View>
    );
}