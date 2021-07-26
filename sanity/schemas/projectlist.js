export default {
  title: 'Project List',
  name: 'projectlist',
  type: 'document',
  fields: [
    {
      title: 'List Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          title: 'Project',
          name: 'project',
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
    },
  ],
};
