import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recommanded',
  title: 'recommanded',
  type: 'document',
  fields: [
    defineField({
      name: 'nameplat',
      title: 'Nom de plat',
 
        type: 'reference',to:[{type:"plat"}],


    }),


    
  ],
 
})
