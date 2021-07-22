export default {
  title: 'Sponsor Page',
  name: 'sponsorpage',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
