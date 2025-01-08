import {Image} from 'phosphor-react';
import {defineType} from 'sanity';

export default defineType({
  title: 'Image',
  name: 'figure',
  type: 'image',
  // @ts-ignore
  icon: Image,
fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (rule) => {
        // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
        return rule.custom((alt, context) => {
          if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
            return 'Required'
          }
          return true
        })
      },
    },
  ],
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      media: 'asset',
    },
    prepare({media}) {
      return {
        title: 'Image',
        media,
      };
    },
  },
});