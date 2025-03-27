import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import houseImages from '@/constants/houseImages'
import images from '@/constants/icons'

interface CardProps {

    onPress?: () => void;
    houseImage: any;
    houseName: string;
    location: string;
    title: string;
}

export const FeaturedCard = ({ onPress, houseImage, title }: CardProps & { title: string }) => {
    return (
        <TouchableOpacity onPress={onPress} 
                            style={{ flexDirection: 'column', width: 130, height: 200, margin: 5, position: 'relative' }}>
            <Image source={houseImage} 
                    style={{ width: '100%', height: '100%', borderRadius: 15 }} />

          <Text style={{ 
            position: 'absolute', 
            fontSize: 16, 
            fontWeight: "bold", 
            bottom: 10, 
            left: 10, 
            color: "white" }}>
              { title }
          </Text>
            {/** <Image source={houseImages.cardGradient} 
                    style={{position: 'absolute', bottom: 0, 
                        width: '100%', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15
                    }} /> **/}
        </TouchableOpacity>
    )
}

export const Card = ({ onPress, houseImage, houseName, price, location }: CardProps & {price: string}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          width: "100%",
          marginTop: 12,
          backgroundColor: "white",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5, // Android shadow
          paddingBottom: 12, // Space for text below
        }}
      >
        {/* Image Container */}
        <View
          style={{
            width: "100%",
            height: 180,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            overflow: "hidden",
          }}
        >
          <Image
            source={houseImage}
            style={{ width: "100%", height: "100%" }}
          />
  
          {/* Rating Badge (inside image container) */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 15,
              position: "absolute",
              top: 10,
              right: 15,
            }}>
            <Image source={images.star} style={{ height: 16, width: 16 }} />
            <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 5 }}>
              4.4
            </Text>
          </View>
        </View>
  
        {/* Text & Price Section (below image) */}
        <View style={{ paddingHorizontal: 12, paddingTop: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
            {houseName}
          </Text>
          <Text style={{ fontSize: 12, color: "#777" }}> { location } </Text>
  
          {/* Price & Favorite Icon */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FF5733" }}>
              { price }
            </Text>
            <Image source={images.heart} style={{ height: 24, width: 24 }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };