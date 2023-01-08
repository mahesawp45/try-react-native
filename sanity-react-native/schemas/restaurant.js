import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
      
    }),
    defineField({
      name: 'restaurantImage',
      title: 'Restaurant Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'latitudeRestaurant',
      title: 'Latitude Restaurant',
      type: 'number',
      
    }),
    defineField({
      name: 'longitudeRestaurant',
      title: 'Longitude Restaurant',
      type: 'number',
      
    }),
    defineField({
      name: 'restaurantAddress',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
      
    }),
    defineField({
      name: 'restaurantRating',
      title: 'Enter a Rating from(1-5 Stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
      
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
      restaurant: 'restaurant.restaurantName',
      media: 'restaurantImage',
    },
    prepare(selection) {
      const {restaurant} = selection
      return {...selection, subtitle: restaurant && `by ${restaurant}`}
    },
  },
})
