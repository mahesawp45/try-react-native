import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter';
import React, { useState } from 'react'
import { urlFor } from '../../../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { APPCOLOR1 } from '../../constants/AppColors';

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {

    const [isPressed, setIsPressed] = useState(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`flex-row justify-between p-4 items-start bg-white border border-gray-100 ${isPressed && 'border-b-0'}`}
            >
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'>{name}</Text>
                    <Text className='text-gray-400'>{description}</Text>
                    <Text className='text-gray-400 mt-2'>
                        <Currency quantity={price} currency="IDR" />
                    </Text>
                </View>

                <Image
                    className='h-20 w-20 rounded-sm'
                    source={{ uri: urlFor(image).width(200).url() }}
                />
            </TouchableOpacity>

            {
                isPressed && (
                    <View className='flex-row items-center space-x-2 bg-white px-4 py-3'>
                        <TouchableOpacity onPress={() => {
                                setCount(count > 0 ? count - 1 : count)

                                setIsPressed(count == 0 ? false : true)
                            }
                        }>
                            <MinusCircleIcon color={APPCOLOR1} size={40} />
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <PlusCircleIcon color={APPCOLOR1} size={40} />
                        </TouchableOpacity>

                    </View>
                )
            }
        </>
    )
}

export default DishRow