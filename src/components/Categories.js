import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './unit/CategoryCard'
import sanityClient from '../../sanity'
import { GET_CATEGORIES } from '../constants/AppAPI'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategoriesData()
    }, [])

    const getCategoriesData = async () => {
        try {
            const response = await sanityClient.fetch(GET_CATEGORIES)

            setCategories(await response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                categories?.map((cat) => {
                    return (
                        <CategoryCard
                            key={cat._id}
                            imgURL={cat.categoryImage}
                            title={cat.title}

                        />
                    )
                })
            }



        </ScrollView>
    )
}

export default Categories