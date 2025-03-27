// app/(root)/(tabs)/index

import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import tw from "tailwind-react-native-classnames";
import { GlobalProvider, useGlobalContext } from "@/context/GlobalContext";
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "@/constants/icons"
import houseImages from '@/constants/houseImages';  // Import images
import Search from '@/components/Search'
import { Card, FeaturedCard } from '@/components/Cards'
import Filter from '@/components/Filters'

// ScrollView
// FlatList (for list of items)

export default function Index () {
  const { user } = useGlobalContext();

  // Sample images list
  const featuredHouses = [
    { image: houseImages.house1, title: "Villas"}, 
    { image: houseImages.house2, title: "Condos"}, 
    { image: houseImages.apartment, title: "Apartments"}
  ];

  const recommendedHouses = [
    { name: "Condo", image: houseImages.condos, price: "$2,500", location: "Jalan Mangga Emas No. 5, Denpasar, Bali"}, 
    { name: "Duplex", image: houseImages.duplex, price: "$3,000", location: "Jalan Paso No 70, Jakarta Selatan "}, 
    { name: "Villa", image: houseImages.villa, price: "$2,700", location: " Bandung, Bandung City, West Java"},
    { name: "Studio", image: houseImages.studio, price: "$2,700", location: "Jl Karet Psr Baru Brt VII 10, Dki Jakarta"}
  ];

  return (
    <GlobalProvider>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <FlatList 
          // data={[1, 2, 3, 4]}
          data={recommendedHouses}
          renderItem={({ item }) => <Card houseName={item.name} houseImage={item.image} price={item.price} location={item.location}/>}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 32, 
            paddingHorizontal: 10,  // Ensures spacing on both sides
          }}
          columnWrapperStyle={{ 
            justifyContent: "space-between", 
            alignItems: "flex-start", 
            gap: 15 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{padding: 10 }}>
              {/* User Info */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 5 }}> 
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={images.avatar} style={{height: 80, width: 80}} />
                  
                  <View style={{flex: 1, flexDirection: "column", justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20 }}> Good morning </Text>
                    <Text style={{ fontSize: 16 }}> User </Text>
                  </View>
                </View> 

                <Image source={images.notification} style={{height: 35, width: 35}}/>
              </View>

              <Search /> 

              <View style={{marginVertical: 7, marginLeft: 5}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                  <Text style={{fontWeight: 'bold'}}> Featured </Text>
                  <TouchableOpacity>
                    <Text style={{fontSize: 16, color: "blue", fontWeight: 'bold', marginRight: 7}}>
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList 
                  data={ featuredHouses } 
                  renderItem={({ item }) => <FeaturedCard houseImage={item.image} title={item.title}/>} 
                  keyExtractor={(item, index) => index.toString()} 
                  horizontal
                  showsHorizontalScrollIndicator = {false} 
                  contentContainerStyle = {{ flex: 1, gap: 5, marginTop: 5 }} />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginBottom: 4}}>
                <Text> Our Recommendations </Text>
                  <TouchableOpacity>
                    <Text style={{fontSize: 16, color: "blue", fontWeight: 'bold', marginRight: 7}}>
                      See All
                    </Text>
                  </TouchableOpacity>
              </View>

              <View style={{ marginBottom: 0, paddingBottom: 0 }}>
                <Filter />
              </View>

              <View style={{flex: 1, flexDirection: 'row', gap: 5, marginTop: 2, marginRight: 5}}>
              </View>
            </View>
            
          }

          ListFooterComponent={<View style={{ height: 50 }} />}

        />


        {/* <View style={{ alignItems: "flex-start", marginVertical: 5 }}>
            <FeaturedCard />
            <Card />
        </View>  */}
      </SafeAreaView>
    </GlobalProvider>
  );
}

