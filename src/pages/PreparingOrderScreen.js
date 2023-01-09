import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className='bg-gray-900 flex-1 justify-center items-center'>
      <Animatable.Image 
        source={require('../../assets/delivery.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='w-full'
      />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen