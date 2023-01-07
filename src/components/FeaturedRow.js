import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { APPCOLOR1 } from '../constants/AppColors'
import RestaurantCard from './unit/RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className='flex-row justify-between mt-4 items-center px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
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
                <RestaurantCard
                    id='1'
                    imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png'
                    title='Melodrama'
                    rating='5.0'
                    genre='Pop'
                    address='New Zealand'
                    short_description='Album Music Pop'
                    dishes='-'
                    long='10'
                    lat='100'
                />
                
                <RestaurantCard
                    id='1'
                    imgURL='https://upload.wikimedia.org/wikipedia/en/e/e7/Life%27s_Not_Out_to_Get_You.jpg'
                    title='Lifes Not Out To Get You'
                    rating='4.8'
                    genre='Pop Punk'
                    address='British'
                    short_description='Album Music Pop'
                    dishes='-'
                    long='10'
                    lat='100'
                />

                <RestaurantCard
                    id='1'
                    imgURL='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-lorde-solar-power-album-cover-bonita-g-giroux.jpg'
                    title='Solar Power'
                    rating='4.5'
                    genre='Pop'
                    address='New Zealand'
                    short_description='Album Music Pop'
                    dishes='-'
                    long='10'
                    lat='100'
                />
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow