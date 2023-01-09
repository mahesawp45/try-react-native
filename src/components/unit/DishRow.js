import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter';
import React, { useState } from 'react'
import { urlFor } from '../../../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { APPCOLOR1, GRAYCOLOR } from '../../constants/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsById } from '../../redux/features/basketSlice';

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {

    const [isPressed, setIsPressed] = useState(false)

    const items = useSelector((state) => selectBasketItemsById(state, id))
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image, }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return

        dispatch(removeFromBasket({id}))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`flex-row justify-between p-4 items-start bg-gray-800 border border-gray-700 ${isPressed && 'border-b-0'}`}
            >
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1 text-white'>{name}</Text>
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
                    <View className='flex-row items-center space-x-2 bg-gray-800 px-4 py-3'>
                        <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
                            <MinusCircleIcon color={items.length > 0  ? APPCOLOR1 : GRAYCOLOR} size={40} />
                        </TouchableOpacity>
                        <Text className='text-white'>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color={APPCOLOR1} size={40} />
                        </TouchableOpacity>

                    </View>
                )
            }
        </>
    )
}

export default DishRow