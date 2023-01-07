import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { APPCOLOR1 } from '../constants/AppColors';

const HomeScreen = () => {

    const navigation = useNavigation()

    // Customisasi App Bar
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className='bg-white pt-5 flex-1'>
            <View>
                {/* Header */}
                <View className='flex-row mx-4 pb-3 space-x-2 items-center'>
                    <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl'>
                            Current Location
                            <ChevronDownIcon size={20} color={APPCOLOR1} />
                        </Text>

                    </View>
                    <UserIcon size={35} color={APPCOLOR1} />
                </View>

                {/* Filter */}
                <View className='flex-row items-center space-x-2 mx-4 pb-2'>
                    <View className='flex-row flex-1 bg-gray-200 space-x-2 p-3 rounded-md'>
                        <MagnifyingGlassIcon color='gray' />
                        <TextInput placeholder='Cari Makanan Enak!' keyboardType='default' />
                    </View>
                    <AdjustmentsVerticalIcon color={APPCOLOR1} />
                </View>
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100 flex-1'>
                <Categories />

                <FeaturedRow
                    id='1'
                    title='Featured'
                    description='Paid placements from our partners'
                />
                <FeaturedRow
                    id='2'
                    title='Nasty Discount %'
                    description='Paid placements from our partners'
                />
                <FeaturedRow
                    id='3'
                    title='Offers near you!'
                    description='Paid placements from our partners'
                />
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen