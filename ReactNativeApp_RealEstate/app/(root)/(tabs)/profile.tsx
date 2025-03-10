import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from "@/constants/icons"; 
import images from '@/constants/images'
import { settings } from '@/constants/data'

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true } : SettingsItemProps) => (
  <TouchableOpacity
  onPress={onPress}
    style={{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 10,
      width: '100%',
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
      <Image source={icon} 
        style={{
          height: 30,
          width: 30,
          resizeMode: 'contain'}}/>
      <Text 
        style={{
          fontSize: 12,
        }}> 
        { title } </Text>
    </View>

    {/* Right Section: Arrow Icon */}
    {showArrow && (
      <View style={{ paddingLeft: 10}}>
        <Image source={icons.rightArrow} 
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
          }}
        />
      </View>
    )} 
  </TouchableOpacity>
)

const Profile = () => {
  const handleLogOut = async () => {};

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 5, flexGrow: 1 }}>

        {/* Header Section */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 5
        }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Profile
          </Text>

          <Image
            source={icons.notification}
            style={{ width: 20, height: 20 }}
          />
        </View>

        {/* Profile Image Section */}
        <View style={{
          alignItems: 'center',
          marginTop: 20
        }}>

          {/* Image and Edit Icon Container */}
          <View style={{ position: 'relative' }}>
            <Image
              source={icons.user}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50
              }}
            />

            <TouchableOpacity style={{
              position: 'absolute',
              bottom: 5,
              right: 0,
              backgroundColor: 'white',
              padding: 6,
              borderRadius: 0,
              borderColor: 'red',
              borderWidth: 2,
              elevation: 3
            }}>
              <Image source={icons.edit}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* User Information */}
          <Text style={{
            fontSize: 14,
            marginTop: 8
          }}>
            Kaz | 0019
          </Text>

        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 10,
        }}>
          <SettingsItem icon={icons.calander} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="My Wallet" />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 5,
          paddingTop: 5,
        }}>
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} { ...item } />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;
