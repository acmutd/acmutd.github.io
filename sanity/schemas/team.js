export default {
  title: 'Team',
  name: 'team',
  type: 'document',
  fields: [
    {
      title: 'Team Name',
      name: 'team',
      type: 'string'
    },
    {
      title: 'Accent',
      name: 'accent',
      type: 'string'
    },
    {
      title: 'Info',
      name: 'info',
      type: 'text'
    },
    {
      title: 'Artifcats',
      name: 'artifacts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      title: 'Officers',
      name: 'officers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'officer' }] }]
    },
    {
      title: 'Timeline',
      name: 'timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Semester',
              name: 'semester',
              type: 'string'
            },
            {
              title: 'Event Title',
              name: 'title',
              type: 'string'
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text'
            },
            {
              title: 'Media',
              name: 'media',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      title: 'Image',
                      name: 'image',
                      type: 'image'
                    },
                    {
                      title: 'Style',
                      name: 'style',
                      type: 'object',
                      fields: [
                        {
                          title: 'Width (%)',
                          name: 'width',
                          type: 'string'
                        },
                        {
                          title: 'Aspect Ratio',
                          name: 'aspectRatio',
                          type: 'string'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
