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
        </TouchableOpacity>
    )
}

export const Card = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: 1, width: '100%', marginTop: 4, paddingVertical: 3,
            backgroundColor: 'white', shadowColor: '#000', shadowOffset: {width: 8, height: 2}, shadowOpacity: 2, 
            elevation: 3, position: 'relative'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white',
                                paddingHorizontal: 1, paddingVertical: 3, position: 'absolute', top: 7, right: 13, zIndex: 50}}>
                    <Image source={images.star} style={{ height: 10, width: 10}} />
                    <Text style={{fontSize: 14}}> 4.4 </Text>
                </View>

                <Image source={houseImages.house2.jpg} style={{width: '100%', height: 40}} />

                <View style={{flex: 1, flexDirection: 'column',
                        position: 'absolute', bottom: 20, left: 6}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white'}}> Modern Apartment </Text>
                    <Text style={{fontSize: 10, color: 'white'}}> 22 W 15 sh, nn</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}> $2,500 </Text>
                        <Image source={images.heart} style={{height: 10, width: 10}} />
                    </View>
                </View>
        </TouchableOpacity>
    )
}