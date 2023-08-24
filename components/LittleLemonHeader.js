import { StyleSheet, View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
    container: { 
        backgroundColor: '#EE9972'
    },
    headerText: {
        paddingTop: 55,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
      }
});