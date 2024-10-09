import {defineField, defineType} from 'sanity'
import {addressType} from './addressType'

export const personType = defineType({
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        defineField({
            name: 'ID',
            type: 'number',
        }),
        defineField({
            name: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'Birthday',
            type: 'date',
        }),
        defineField({
            name: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'Telephone',
            type: 'string',
        }),
        defineField({
            name: 'ProfileImage',
            type: 'image',
        }),
        defineField({
            name: 'Active',
            type: 'boolean',
        }),
        defineField({
            name: 'Address',
            type: 'address',
        }),
    ]
})