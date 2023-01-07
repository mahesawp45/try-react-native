import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurantName',
      title: 'Restaurant Name',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string'
    }),
    // defineField({
    //   name: 'short-description',
    //   title: 'Short Description',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'restaurantImage',
      title: 'Restaurant Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'string'
    }),
    defineField({
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Address of Restaurant',
      type: 'string'
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 Stars)',
      type: 'number'
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
  ],

  preview: {
    select: {
      title: 'Restaurant Image',
      author: 'author.name',
      media: 'restaurantImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
