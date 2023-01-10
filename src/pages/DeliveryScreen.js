import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { APPCOLOR1, APPCOLOR2 } from '../constants/AppColors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../constants/AppName'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/features/restaurantSlice'
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const height = Dimensions.get('window').height

  return (
    <View className='flex-1 relative' style={{ backgroundColor: APPCOLOR1 }}>
      <SafeAreaView className='z-50 absolute w-full'>
        <View className='flex-row justify-between p-5'>
          <TouchableOpacity
            onPress={() => navigation.navigate(HOME)}
          >
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text className='text-white font-light'>Order Help</Text>
          </TouchableOpacity>
        </View>

        <View className='bg-gray-800 flex-row mx-3 p-5 rounded-md space-x-2'>
          <View className='flex-1 space-y-2'>
            <Text className='text-gray-400'>Estimated Arrival</Text>
            <Text className='text-4xl text-white font-extrabold'>45-55 Minutes</Text>
            <Progress.Bar size={30} color={APPCOLOR1} indeterminate={true} />
            <Text className='text-gray-400 text-sm font-bold'>Your order at {restaurant.title}'s is being prepared</Text>
          </View>

          <Image
            source={{ uri: 'https://links.papareact.com/fls' }}
            className='h-16 w-16'
          />
        </View>
      </SafeAreaView>
      <View className='bottom-0 absolute bg-gray-100 w-full items-center justify-center' style={{ height: (height / 1.3) }}>
        <MapView className='w-full h-full'
          initialRegion={{ 
            latitude : restaurant.lat,
            longitude:  restaurant.long,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
           }}
           mapType='mutedStandard'
         >
          <Marker 
            coordinate={{ 
              latitude : restaurant.lat,
            longitude:  restaurant.long,
             }}
             title={restaurant.title}
             description={restaurant.short_description}
             identifier='origin'
             pinColor='red'
          />
         </MapView>

        <View className='absolute bottom-0 bg-slate-800 h-24 w-full flex-row items-center p-5 space-x-4'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-10 w-10 rounded-full bg-gray-300'
          />
          <View className='flex-1'>
            <Text className='text-white text-lg'>Mahesa WP</Text>
            <Text className='text-gray-400 text-xs'>Your Rider</Text>
          </View>

          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: APPCOLOR1 }} className='font-bold'>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DeliveryScreen