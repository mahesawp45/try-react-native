import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { GRAYCOLOR, RATINGCOLOR } from '../../constants/AppColors'
import { urlFor } from '../../../sanity'
import { useNavigation } from '@react-navigation/native'
import { RESTAURANT } from '../../constants/AppName'

const RestaurantCard = ({
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
}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            className='bg-gray-800 shadow mr-3 rounded-sm'
            onPress={() => {
                navigation.navigate(RESTAURANT, {
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
                })
            }}
        >
            <Image
                // ini karena makai Sanity
                source={{ uri: urlFor(imgURL).url() }}
                className='h-36 w-64 rounded-sm bg-slate-900'
            />
            <View className='px-3 pb-4 pt-2'>
                <Text className='text-lg font-bold text-white'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color={RATINGCOLOR} opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color={GRAYCOLOR} opacity={0.4} size={22} />
                    <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard