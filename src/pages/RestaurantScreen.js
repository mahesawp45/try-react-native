import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../../sanity'
import { ArrowLeftIcon, ChevronRightIcon, StarIcon } from 'react-native-heroicons/solid'
import { APPCOLOR1, GRAYCOLOR, RATINGCOLOR } from '../constants/AppColors'
import { MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/unit/DishRow'
import BasketIcon from '../components/unit/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../redux/features/restaurantSlice'

const RestaurantScreen = () => {

    const {
        params: {
            id,
            imgURL,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }
    } = useRoute()

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgURL,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }))
    }, [])

    return (
        <>
            <BasketIcon />
            <ScrollView className='bg-gray-900'>
                <View className='relative'>
                    <Image
                        source={{ uri: urlFor(imgURL).url() }}
                        className='w-full h-56 bg-gray-300 p-4'
                    />
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-800 top-14 left-5 p-3 absolute justify-center items-center'
                    >
                        <ArrowLeftIcon color={APPCOLOR1} size={18} />
                    </TouchableOpacity>

                </View>

                <View className='bg-gray-800'>
                    <View className='px-4 pt-4'>

                        <Text className='font-bold text-3xl text-white'>{title}</Text>

                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color={RATINGCOLOR} opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>{rating}</Text> . {genre}
                                </Text>
                            </View>

                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon color={GRAYCOLOR} opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
                            </View>

                        </View>

                        <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>

                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        className='flex-row items-center space-x-2 p-4 border-y border-gray-700'
                    >

                        <QuestionMarkCircleIcon color={GRAYCOLOR} opacity={0.6} size={20} />
                        <Text className='flex-1 text-sm font-bold text-white'>Have a food alergy?</Text>
                        <ChevronRightIcon color={APPCOLOR1} />

                    </TouchableOpacity>
                </View>

                <View className='pb-36'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl text-white'>Menu</Text>

                    {
                        dishes.map((dish) => {
                            return (
                                <DishRow
                                    key={dish._id}
                                    id={dish._id}
                                    name={dish.title}
                                    description={dish.shortDescription}
                                    price={dish.price}
                                    image={dish.dishImage}
                                />
                            )
                        })
                    }

                </View>

            </ScrollView>
        </>

    )
}

export default RestaurantScreen