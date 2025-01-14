import {Bookmark} from 'phosphor-react';
import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Tags',
  name: 'tag',
  type: 'document',
  // @ts-ignore
  icon: Bookmark,
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
      validation: (Rule) => Rule.required(),
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