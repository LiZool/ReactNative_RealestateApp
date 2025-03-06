import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from "@/constants/icons"; 

const profile = () => {
  const handleLogOut = async () => {};

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 5}}> 
          <View style={{ flex: 1,
                flexDirection: 'row',
                alignItems: 'center', 
                justifyContent: 'space-between',
                margin: 5}}> 
            <Text style={{
                  fontSize: 15, 
                  fontWeight: 'bold'}}> 
              Profile
            </Text>

            <Image 
                source={icons.notification} 
                style={{ width: 20, height: 20 }}
            />
          </View>

          <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'space-between'}}> 
            <Image 
                source={icons.notification} 
                style={{ width: 20, height: 20 }}
            />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile