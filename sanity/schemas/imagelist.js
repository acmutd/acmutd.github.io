export default {
  title: 'Image List',
  name: 'imagelist',
  type: 'document',
  fields: [
    {
      title: 'List Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
};
