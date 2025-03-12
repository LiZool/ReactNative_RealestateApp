import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from "@/constants/icons"; 
import images from '@/constants/images'
import { settings } from '@/constants/data'
import { useGlobalContext } from "@/context/GlobalContext";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: object;
  iconStyle?: object;
  showArrow?: boolean;
  style?: object;
}

const SettingsItem = ({ icon, title, onPress, textStyle = {}, iconStyle = {}, showArrow = true, style = {} } : SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
      style={[
        {
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 8,
          paddingHorizontal: 10,
          width: '100%',
        }, style ]}>
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
       {/* Apply iconStyle */}
      <Image source={icon} 
        style={[{
          height: 30,
          width: 30,
          resizeMode: 'contain'}, iconStyle]}/>

          {/* Apply textStyle */}
        <Text 
          style={[{
            fontSize: 12,
          }, textStyle]}> 
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

  const { user, refetch, logout } = useGlobalContext()

  const handleLogOut = async () => {
    const result = await logout()

    if(result)
    {
      Alert.alert("Success", "You have been logged  out succesfully");
      refetch();
    }

    else
    {
      Alert.alert("Error", "An error occured while logging out")
    }
  };

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
              source={ user?.profilePicture ? {uri: user.profilePicture} : require('@/assets/images/icons/profile.png')}
              style={{
                width: 120,
                height: 120,
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
            marginTop: 6
          }}>
            Kaz | 0019
          </Text>

        </View>

        <View style={{
          marginTop: 10,
        }}>
          <SettingsItem icon={icons.calander} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="My Wallet" />
        </View>

        <View style={{
            flexDirection: 'column',
            marginTop: 25,
            paddingTop: 5,
          }}>
            {settings.map((item, index) => (
              <SettingsItem key={index} { ...item } />
            ))}
        </View>

        <View style={{
            alignItems: 'flex-start',
            marginTop: 25,
            paddingTop: 5,
          }}>
            <SettingsItem icon={icons.logout} 
              title="Logout" 
              showArrow={false} 
              onPress={handleLogOut}
              textStyle={{
                color: 'red',
                fontWeight: 'bold'
              }}
              iconStyle={{
                tintColor: 'red'
              }}
              style={{ 
                borderRadius: 5,
                width: '90%'}} />         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;
