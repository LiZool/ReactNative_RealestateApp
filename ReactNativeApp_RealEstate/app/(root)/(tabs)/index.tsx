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
    
      <Text style={{ color: "black", fontSize: 24, marginBottom: 15 }}> Welcome to ReState </Text>
      <Link href="/sign-up"> Sign Up </Link>
      <Link href="/explore"> Explore </Link>
      <Link href="/profile"> Profile </Link>
      <Link href={{ 
        pathname: "/properties/[id]", 
        params: { id: "1"}}}> Property 
      </Link>
    </View>
  );
}

