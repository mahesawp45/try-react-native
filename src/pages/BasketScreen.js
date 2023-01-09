import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { selectRestaurant } from '../redux/features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { APPCOLOR1, APPCOLOR2 } from '../constants/AppColors'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter';
import { urlFor } from '../../sanity'
import { PREPARING_ORDER } from '../constants/AppName'

const BasketScreen = () => {

    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const restaurant = useSelector(selectRestaurant)
    const totalPrice = useSelector(selectBasketTotal)
    const dispatch = useDispatch()

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    return (
        <SafeAreaView className='flex-1 bg-gray-800'>
            <View className='flex-1 bg-gray-900 relative'>
                <View className='bg-gray-800 p-5 border-b shadow-sm shadow-gray-200'>

                    <View>
                        <Text className='text-lg font-bold text-center text-white'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>


                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='rounded-full absolute top-3 right-5'
                    >
                        <XCircleIcon color={APPCOLOR1} height={50} width={50} />
                    </TouchableOpacity>


                </View>

                <View className='flex-row bg-gray-800 my-5 p-4 space-x-4 items-center'>
                    <Image
                        source={{ uri: 'https://links.papareact.com/wru' }}
                        className='h-7 w-7 rounded-full'
                    />

                    <Text className='flex-1 text-white'>Deliver in 50-75 min</Text>

                    <TouchableOpacity>
                        <Text style={{ color: APPCOLOR1 }}>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-700'>
                    {
                        Object.entries(groupedItemsInBasket).map(([key, items]) => (
                            <View key={key}
                                className='bg-gray-800 flex-row items-center space-x-3 py-2 px-5'
                            >
                                <Text className='text-white'>{items.length} x</Text>
                                <Image
                                    source={{ uri: urlFor(items[0]?.image).url() }}
                                    className='h-12 w-12 rounded-full'
                                />
                                <Text className='flex-1 text-white'>{items[0]?.name}</Text>
                                <Text className='text-gray-400 mt-2'>
                                    <Currency quantity={items[0]?.price} currency="IDR" />
                                </Text>

                                <TouchableOpacity
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    <Text className='text-xs text-red-500'>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        )
                        )
                    }
                </ScrollView>


                <View className='h-52 w-full bg-gray-800 absolute bottom-0 z-10 p-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={totalPrice} currency="IDR" />
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={16000} currency="IDR" />
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-white'>Order Total</Text>
                        <Text className='font-extrabold text-white'>
                            <Currency quantity={(totalPrice + 16000)} currency="IDR" />
                        </Text>
                    </View>

                    <TouchableOpacity className='w-full rounded-md py-3'
                        style={{ backgroundColor: APPCOLOR1 }}
                        onPress={() => { navigation.navigate(PREPARING_ORDER) }}
                    >
                        <Text className='font-bold text-lg text-center text-white'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen