import {MonitorPlay} from 'phosphor-react';
import {defineField, defineType} from 'sanity';

export default defineType({
  title: 'Video',
  name: 'video',
  type: 'object',
  description:
    'To add a video, upload it to Vimeo, AWS, Mux etc. or a host where you can access direct links to the video files.',
  // @ts-ignore
  icon: MonitorPlay,
  fields: [
    defineField({
      title: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      title: '2K 2560x1440',
      name: 'hd2k2560',
      type: 'url',
      description: 'E.g. https://player.vimeo.com',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          //scheme: ["https"],
        }),
    }),
    defineField({
      title: 'HD 1920x1080',
      name: 'hd1920',
      type: 'url',
      description: 'E.g. https://player.vimeo.com',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          //scheme: ["https"],
        }),
    }),
    defineField({
      title: 'HD 1280x720',
      name: 'hd1280',
      type: 'url',
      description: 'E.g. https://player.vimeo.com',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          //scheme: ["https"],
        }),
    }),
    defineField({
      title: 'SD 960x540',
      name: 'sd960',
      type: 'url',
      description: 'E.g. https://player.vimeo.com',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          //scheme: ["https"],
        }),
    }),
    defineField({
      title: 'SD 640x360 (Mobile)',
      name: 'sd640',
      type: 'url',
      description: 'E.g. https://player.vimeo.com',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          //scheme: ["https"],
        }),
    }),
    defineField({
      title: 'Poster Image',
      name: 'posterImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        title: 'Mobile Image',
        name: 'mobileImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
  preview: {
    select: {
      media: 'posterImage',
    },
    prepare({media}) {
      return {
        title: 'Video',
        media,
      };
    },
  },
});