import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();  
    const [selectedCatagory, setSelectedCategory ] = useState(params.filter || 'All');

    const handleCategoryPress = (category: string) => {}
    
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
            style={{ marginTop: 3, marginBottom: 2}}>
            {categories.map((item, index) => (
                <TouchableOpacity 
                    onPress={() => handleCategoryPress(item.category)} 
                    style={{
                        flexDirection: 'column', 
                        alignItems: 'flex-start', 
                        paddingVertical: 4, 
                        paddingHorizontal: 2, 
                        backgroundColor: selectedCatagory === item.category ? 'red': 'blue'
                    }}>
                    <Text> {item.title} </Text>
                </TouchableOpacity>
            ))}
            <Text>Filters</Text>
        </ScrollView>
    )
}

export default Filters