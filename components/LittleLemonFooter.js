import * as React from 'react';
import { View, Text} from 'react-native';

export default function LittleLemonFooter() {
    return (
       <View style={{ 
            flex: 0.5, 
            backgroundColor: 'yellow',
         }}>
            <View style={{
                
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 5
                }}>All rights reserved by Little Lemon, 2023</Text>
            </View>
       </View>
    );
}