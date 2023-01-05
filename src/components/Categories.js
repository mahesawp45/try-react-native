import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />
            <CategoryCard imgURL='https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png' title='TESTING' />

        </ScrollView>
    )
}

export default Categories