import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'orders',
  title: 'orders',
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'nom',
      type: 'string',
    }),
    defineField({
      name: 'prenom',
      title: 'prenom',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'string',
    }),
    defineField({
      name: 'gouvernerat',
      title: 'gouvernerat',
      type: 'string',
    }),
    defineField({
      name: 'total',
      title: 'total',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'phoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'itemsPurchased',
      title: 'Items Purchased',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Item Name',
              type: 'string',
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            }),
          ],
        },
      ],
    }),
  ],
})
