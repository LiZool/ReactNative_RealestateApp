// app/(root)/(tabs)/index

import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import tw from "tailwind-react-native-classnames";
import { GlobalProvider } from "@/context/GlobalContext";
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "@/constants/icons"
import Search from '@/components/Search'
import { Card, FeaturedCard } from '@/components/Cards'

export default function Index () {
  return (
    <GlobalProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{padding: 5}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 5}}> 
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={images.avatar} style={{height: 60, width: 60}} />
                <View style={{flex: 1, flexDirection: "column", justifyContent: 'center'}}>
                  <Text style={{ fontSize: 20 }}> Good morning </Text>
                  <Text style={{ fontSize: 16 }}> Adrian </Text>
                </View>
                <Image source={images.notification} style={{height: 35, width: 35}}/>
            </View> 
          </View>
        </View>
        <Search />

        <View style={{marginVertical: 7, marginLeft: 5}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
            <Text> Featured </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: "blue", fontWeight: 'bold', marginRight: 7}}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "flex-start", marginVertical: 5 }}>
            <FeaturedCard />
            <Card />
        </View>     
      </SafeAreaView>
    </GlobalProvider>
  );
}

