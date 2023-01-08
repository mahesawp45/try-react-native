import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      
    }),
    defineField({
      name: 'dishImage',
      title: 'Dish Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      dish: 'dish.title',
      media: 'dishImage',
    },
    prepare(selection) {
      const {dish} = selection
      return {...selection, subtitle: dish && `by ${dish}`}
    },
  },
})
