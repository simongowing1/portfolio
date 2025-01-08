import {Image} from 'phosphor-react';
import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  // @ts-ignore
  icon: Image,
  description: 'Hero section.',
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      title: 'Hide Hero',
      name: 'hideHero',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Heading Type',
      name: 'headingType',
      type: 'string',
      description: 'Choose type for hero heading.',
      options: {
        list: [
          {title: 'Logo', value: 'logo'},
          {title: 'Text', value: 'text'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'text',
    }),
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
      hidden: ({parent}) => parent && parent.headingType !== 'text',
    }),
    defineField({
      title: 'Subheading',
      name: 'subheading',
      type: 'text',
      // @ts-ignore
      rows: 3,
      hidden: ({parent}) => parent && parent.headingType !== 'text',
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'figure',
      options: {
        hotspot: false,
        accept: '.svg,.png',
      },
      description: 'Upload a logo for this hero. Only accepts png or svg.',
      hidden: ({parent}) => parent && parent.headingType !== 'logo',
    }),
    defineField({
      title: 'Logo Width',
      name: 'logoWidth',
      type: 'number',
      description: 'Enter width for logo in px.',
      hidden: ({parent}) => parent && parent.headingType !== 'logo',
    }),
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      description: 'Choose media type for hero.',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'figure',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent && parent.type !== 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'video',
      hidden: ({parent}) => parent && parent.type !== 'video',
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({media}) {
      return {
        title: 'Hero',
        media,
      };
    },
  },
});