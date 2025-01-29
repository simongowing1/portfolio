import { DocumentTextIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

/**
 * Project schema.  Define and edit the fields for the 'project' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const project = defineType({
  name: 'project',
  title: 'Project',
  icon: DocumentTextIcon,
  type: 'document',
  groups: [
    {
      name: 'details',
    },
    {
      name: 'editorial'
    },
    {
      name: 'sections',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      description: 'A slug is required for the project to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'editorial'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'editorial'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'figure',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      group: 'editorial',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isImageScreenHeightOnly',
      title: 'Image is Screen Height',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      name: 'date',
      title: 'Delivery Date',
      type: 'date',
      group: 'details',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'reference',
      group: 'details',
      to: [{ type: 'sector' }],
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'responsibility' }],
        },
      ],
      group: 'details',
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      group: 'details',
      validation: (Rule) => Rule.unique(),
    }),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
      authorFirstName: 'author.firstName',
      authorLastName: 'author.lastName',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, authorFirstName, authorLastName, date }) {
      const subtitles = [
        authorFirstName && authorLastName && `by ${authorFirstName} ${authorLastName}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
