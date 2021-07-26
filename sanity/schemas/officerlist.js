export default {
  title: 'Officer List',
  name: 'officerlist',
  type: 'document',
  fields: [
    {
      title: 'List Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Officers',
      name: 'officers',
      type: 'array',
      of: [
        {
          title: 'Officer',
          name: 'officer',
          type: 'reference',
          to: [
            {
              type: 'officer',
            },
          ],
        },
      ],
    },
  ],
};
