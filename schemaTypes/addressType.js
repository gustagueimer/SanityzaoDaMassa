import {defineType, defineField} from 'sanity'

export const addressType = defineType({
    name: 'address',
    title: 'Address',
    type: 'document',
    fields: [
        defineField({
            name: 'Street',
            type: 'string',
        }),
        defineField({
            name: 'Number',
            type: 'string',
        }),
        defineField({
            name: 'Neighborhood',
            type: 'string',
        }),
        defineField({
            name: 'City',
            type: 'string'
        }),
        defineField({
            name: 'State',
            type: 'string',
        }),
        defineField({
            name: 'County',
            type: 'string',
        }),
        defineField({
            name: 'ZipCode',
            type: 'string',
        }),
    ]
})