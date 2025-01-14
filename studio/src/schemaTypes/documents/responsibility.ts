import {ListBullets} from 'phosphor-react';
import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Responsibility',
  name: 'responsibility',
  type: 'document',
  // @ts-ignore
  icon: ListBullets,
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Value',
      name: 'value',
      type: 'slug',
      options: {
        source: 'label',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      description: 'To be used for filtering. For instance: this-is-a-value',
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      return {...selection};
    },
  },
});