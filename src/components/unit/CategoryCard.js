import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../../sanity'

const CategoryCard = ({imgURL, title}) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image 
                source={{ uri: urlFor(imgURL).width(200).url() }}
                className='h-20 w-20 rounded bg-slate-900'
            />
            <Text className='absolute bottom-1 left-1 font-bold text-white'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard