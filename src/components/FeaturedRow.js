import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { APPCOLOR1 } from '../constants/AppColors'
import RestaurantCard from './unit/RestaurantCard'
import sanityClient from '../../sanity'
import { GET_RESTAURANT_BY_FEATURED } from '../constants/AppAPI'

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setrestaurants] = useState([])

    useEffect(() => {
        getRestaurantsData()

    }, [id])

    const getRestaurantsData = async () => {
        try {
            const response = await sanityClient.fetch(GET_RESTAURANT_BY_FEATURED, { id })
            setrestaurants(await response?.restaurants)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View>
            <View className='flex-row justify-between mt-4 items-center px-4'>
                <Text className='font-bold text-lg text-white'>{title}</Text>
                <ArrowRightIcon color={APPCOLOR1} />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaurant Card */}

                {
                    restaurants.map((res) => {
                        return (
                            <RestaurantCard
                                key={res._id}
                                id={res._id}
                                imgURL={res.restaurantImage}
                                title={res.title}
                                rating={res.restaurantRating}
                                genre={res._type}
                                address={res.restaurantAddress}
                                short_description={res.shortDescription}
                                dishes={res.dishes}
                                long={res.longitudeRestaurant}
                                lat={res.latitudeRestaurant}
                            />
                        )
                    })
                }





            </ScrollView>
        </View>
    )
}

export default FeaturedRow