import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Currency from 'react-currency-formatter';
import { selectBasketItems, selectBasketTotal } from '../../redux/features/basketSlice'
import { APPCOLOR1, APPCOLOR2 } from '../../constants/AppColors';
import { useNavigation } from '@react-navigation/native';
import { BASKET } from '../../constants/AppName';

const BasketIcon = () => {

  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const navigation = useNavigation()

  if (items.length === 0) return null
  

  return (
    <View className='absolute bottom-10  w-full z-50'>
      <TouchableOpacity
      onPress={() => navigation.navigate(BASKET)}
      className='flex-row items-center justify-between p-4 mx-5 rounded-md' style={{ backgroundColor: APPCOLOR1 }}>
        <Text className='text-white font-extrabold text-lg py-1 px-2 rounded-sm' style={{ backgroundColor: APPCOLOR2 }}>{items.length}</Text>
        <Text className='text-white flex-1 text-lg font-extrabold text-center'>View Basket</Text>
        <Text className='text-white font-extrabold'>
            <Currency quantity={basketTotal} currency='IDR'  />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon