import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../constants/icons"; 

const SignUp = () => {

  const handleLogin = () => {

  }

  return (
    <SafeAreaView style={{  }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}> 
        <Image 
          source={icons.google}
          style={{ width: "80%", height: 200}}
          resizeMode="contain" />              
      
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 22, paddingTop: 10, textAlign: "center" }}>
                Welcome to Restate
          </Text>

          <Text style={{ fontSize: 32, marginTop: 5, textAlign: "center" }}>
                Lets get you closer to {"\n"}
                <Text style={{ fontSize: 20, color: "blue", paddingTop: 13}}> Your ideal Home </Text>
          </Text>

          <Text style={{ fontSize: 20, marginTop: 12 }}>
                Login to ReState with Google {"\n"}
          </Text>

          {/* Google Login Button */}
          <TouchableOpacity 
            onPress={handleLogin}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 8,
              marginTop: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5, // Android shadow
            }}
          >

            <View style={{ flex: 1 }}>

            </View>

            <Image 
              source={icons.google}
              style={{ width: 25, height: 25, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 18, color: '#000' }}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp