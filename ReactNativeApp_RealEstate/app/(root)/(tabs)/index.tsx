// app/(root)/(tabs)/index

import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import tw from "tailwind-react-native-classnames";

export default function Index () {
  return (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    
      <Text style={{ 
        color: "black", 
        fontSize: 40, 
        marginBottom: 0 }}> Welcome to ReState </Text>
    </View>
  );
}

