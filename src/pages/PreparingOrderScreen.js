import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { APPCOLOR1 } from '../constants/AppColors'
import { useNavigation } from '@react-navigation/native';
import { DELIVERY } from '../constants/AppName';

const PreparingOrderScreen = () => {

  const navigation = useNavigation()

  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate(DELIVERY)
    }, 3000)
  }, [])

  return (
    <SafeAreaView className='bg-gray-900 flex-1 justify-center items-center relative'>
      <Animatable.Image
        source={require('../../assets/delivery.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='w-96 h-96'
      />

      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg text-white text-center my-10 font-bold'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={APPCOLOR1} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen