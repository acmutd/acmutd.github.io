export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Project Name',
      name: 'project',
      type: 'string',
    },
    {
      title: 'Tag',
      name: 'tag',
      type: 'string',
    },
    {
      title: 'Contributors',
      name: 'contributors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'GitHub Repository',
      name: 'repo',
      type: 'object',
      fields: [
        {
          title: 'Repo Display',
          name: 'display',
          type: 'string',
        },
        {
          title: 'Repo URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Overlay Description',
      name: 'overlay_description',
      type: 'array',
      of: [{ type: 'text' }]
    }
  ],
}
