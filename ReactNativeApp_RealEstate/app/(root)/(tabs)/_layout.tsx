import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router"

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title}: { 
    focused: boolean;
    icon: any;
    title: string;
}) => (
    <View>
        <Image source={icon} style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }} />
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
                    minHeight: 100,
                }
            }}>

            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} focused={focused} title="Home" />
                    )
                }}
             />
        </Tabs>
    )
}

export default TabsLayout;