import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import houseImages from '@/constants/houseImages'
import images from '@/constants/icons'

interface Props {
    onPress?: () => void;
}

export const FeaturedCard = ({ onPress}: Props) => {
    return (
        <TouchableOpacity onPress={onPress} 
                            style={{ flexDirection: 'column', width: 150, height: 200, margin: 5, position: 'relative' }}>
            <Image source={houseImages.house1} 
                    style={{width: '100%', height: '100%', borderRadius: 15}} />
            {/** <Image source={houseImages.cardGradient} 
                    style={{position: 'absolute', bottom: 0, 
                        width: '100%', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15
                    }} /> **/}

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white',
                            paddingHorizontal: 1, paddingVertical: 3, position: 'absolute', top: 7, right: 13
            }}>
                <Image source={images.star} style={{ height: 10, width: 10}} />
                <Text style={{fontSize: 14}}> 4.4 </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', paddingBottom: 6,
                    position: 'absolute', bottom: 5}}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white'}}> Modern Apartment </Text>
            </View>
        </TouchableOpacity>
    )
}

export const Card = () => {
    return (
        <View >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Cards </Text>
        </View>
    )
}