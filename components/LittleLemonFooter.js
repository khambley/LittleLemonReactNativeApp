import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View
          style={footerStyles.container}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textAlign: 'center',
            }}>
            All rights reserved by Little Lemon, 2022{' '}
          </Text>
        </View>
      );
}
const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    marginBottom: 15,
  }
});
