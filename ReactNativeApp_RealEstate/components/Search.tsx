import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, usePathname, useRouter } from 'expo-router'
import icons from "@/constants/icons"; 
import images from '@/constants/images'
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const router = useRouter();
  const path = usePathname();
  const params = useLocalSearchParams <{ query?: string }>();
  const [ search, setSearch ] = useState(params.query);
  
  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text}), 500)

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '97%', 
                  borderWidth: 1, borderRadius: 10,
                  borderColor: '#E5E7EB', backgroundColor: '#F3F4F6',
                  paddingHorizontal: 16, marginTop: 20, paddingVertical: 10,
                  marginLeft: 10, marginRight: 10,
                }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                  <Image source={icons.search} style={{height: 20, width: 20, marginRight: 8}} />
                  <TextInput value={search} 
                            onChangeText={handleSearch} 
                            placeholder='Search for anything' 
                            style = {{ fontSize: 14, flex: 1}}/>      
      </View>

      <TouchableOpacity style={{ marginLeft: 10 }}>
        <Image source={icons.filter} style={{ width: 16, height: 16}} />
      </TouchableOpacity>
    </View>
  )
}

export default Search