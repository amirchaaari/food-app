import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plat',
  title: 'plat',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de plat',
      type: 'string',
      validation:(Rule) =>Rule.required(),

    }),
    defineField({
      name: 'price',
      title: 'prix',
      type: 'string',
      validation:(Rule) =>Rule.required(),


    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    }),
    defineField({
        name: 'category',
        title: 'category ',
        type: 'reference',to:[{type:"category"}],
        validation:(Rule) =>Rule.required(),
      }),
      defineField({
        name: 'rating',
        title: 'rating ',
        type: 'number',
        validation:(Rule) =>Rule.max(5).min(1).error("donnez une note de 1 a 5"),
      }),
    
  ],
 
})
