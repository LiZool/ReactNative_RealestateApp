import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{ filter?: string }>();  
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{
                paddingVertical: 3, // Reduce vertical space
                paddingHorizontal: 10, 
                height: 30, // Keep the filter short
                alignItems: 'center', // Keep text aligned properly
            }}
        >
            {categories.map((item, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => handleCategoryPress(item.category)}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: selectedCategory === item.category ? '#FF5733' : '#EAEAEA',
                        borderRadius: 12, // Smaller radius
                        paddingVertical: 3, // Reduce vertical padding
                        paddingHorizontal: 8, // Reduce horizontal padding
                        marginRight: 5, // Keep buttons closer
                        height: 25, // Shorter button height
                        justifyContent: 'center', // Center text
                        alignItems: 'center', 
                    }}
                >
                    <Text style={{ 
                        color: selectedCategory === item.category ? 'white' : '#333', 
                        fontWeight: '500',
                        fontSize: 11, // Smaller text size
                    }}> 
                        {item.title} 
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Filters;