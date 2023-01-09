import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState, useEffect } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import axios from 'axios';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { APPCOLOR1 } from '../constants/AppColors';
import sanityClient from '../../sanity'
import { GET_FEATURED, GET_FEATURED_SANITY } from '../constants/AppAPI';


const HomeScreen = () => {

    const navigation = useNavigation()

    // Customisasi App Bar
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        getFeaturedData()


    }, [])

    const getFeaturedData = async () => {
        try {
            const response = await sanityClient.fetch(GET_FEATURED_SANITY)
            setFeaturedCategories(await response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <SafeAreaView className='bg-gray-800 pt-5 flex-1'>
            <View>
                {/* Header */}
                <View className='flex-row mx-4 pb-3 space-x-2 items-center'>
                    <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl text-white'>
                            Current Location
                            <ChevronDownIcon size={20} color={APPCOLOR1} />
                        </Text>

                    </View>
                    <UserIcon size={35} color={APPCOLOR1} />
                </View>

                {/* Filter */}
                <View className='flex-row items-center space-x-2 mx-4 pb-3'>
                    <View className='flex-row flex-1 bg-gray-700 space-x-2 p-3 rounded-md'>
                        <MagnifyingGlassIcon color='gray' />
                        <TextInput placeholder='Cari Makanan Enak!' placeholderTextColor={'white'} keyboardType='default' />
                    </View>
                    <AdjustmentsVerticalIcon color={APPCOLOR1} />
                </View>
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-900 flex-1'>
                <Categories />

                {
                    featuredCategories?.map((category) => {
                        return (
                            <FeaturedRow
                                key={category._id}
                                id={category._id}
                                title={category.title}
                                description={category.shortDescription}
                            />
                        )
                    })
                }

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen