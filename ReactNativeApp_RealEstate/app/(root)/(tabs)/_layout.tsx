import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router"

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title}: { 
    focused: boolean;
    icon: any;
    title: string;
}) => (
    <View style={{
            flex: 1,
            margin: 3,
            alignItems: 'center'}}>
        <Image 
            source={icon} 
            style={{ 
                width: 40, 
                height: 40, 
                tintColor: focused ? "blue" : "gray" }} />
        <Text style={[styles.text, focused && styles.textFocused]}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061FF1A',
                    borderTopWidth: 1,
                    minHeight: 80,
                }
            }}>

            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} 
                                    focused={focused} 
                                    title="Home" />
                    )
                }}
             />

            <Tabs.Screen 
                name="explore"
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} 
                                    focused={focused} 
                                    title="Explore" />
                    )
                }}
             />

            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.profile} 
                                    focused={focused} 
                                    title="Profile" />
                    )
                }}
             />
        </Tabs>
    )
}

export default TabsLayout;

const styles = StyleSheet.create({
    tabIconContainer: {
        flex: 1,
        margin: 3,
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40
    },
    text: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        marginTop: 5
    },
    textFocused: {
        color: 'blue',
        fontWeight: 'bold'
    },
    tabBar: {
        backgroundColor: 'white',
        position: 'absolute',
        borderTopColor: '#0061FF1A',
        borderTopWidth: 1,
        minHeight: 80
    }
});