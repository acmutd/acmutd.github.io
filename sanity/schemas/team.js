export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  fields: [
    {
      title: 'Team Name',
      name: 'team',
      type: 'string',
    },
    {
      title: 'Accent',
      name: 'accent',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: 'Images',
          name: 'images',
          type: 'reference',
          to: [
            {
              type: 'imagelist',
            },
          ],
        },
        {
          title: 'Officers',
          name: 'officers',
          type: 'reference',
          to: [
            {
              type: 'officerlist',
            },
          ],
        },
        {
          title: 'Projects',
          name: 'projects',
          type: 'reference',
          to: [
            {
              type: 'projectlist',
            },
          ],
        },
        {
          title: 'Info Center',
          name: 'info_center',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
          ],
        },
        {
          title: 'Info Left',
          name: 'info_left',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'reference',
              to: [
                {
                  type: 'imagelist',
                },
              ],
            },
          ],
        },
        {
          title: 'Info Right',
          name: 'info_right',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'reference',
              to: [
                {
                  type: 'imagelist',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
