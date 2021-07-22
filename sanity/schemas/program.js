export default {
  title: 'Program',
  name: 'program',
  type: 'document',
  fields: [
    {
      title: 'Program Name',
      name: 'program',
      type: 'string',
    },
    {
      title: 'Accent',
      name: 'accent',
      type: 'string',
    },
    {
      title: 'Gradient Left',
      name: 'left',
      type: 'string',
    },
    {
      title: 'Gradient Right',
      name: 'right',
      type: 'string',
    },
    {
      title: 'Why us',
      name: 'why',
      type: 'text',
    },
    {
      title: 'Program Benefits',
      name: 'benefits',
      type: 'text',
    },
    {
      title: 'How to join',
      name: 'how',
      type: 'text',
    },
    {
      title: 'Application Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Artifcats',
      name: 'artifacts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
};
