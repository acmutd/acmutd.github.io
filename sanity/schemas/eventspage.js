export default {
  title: 'Events Page',
  name: 'eventspage',
  type: 'document',
  fields: [
    {
      title: 'Who can attend',
      name: 'who',
      type: 'text'
    },
    {
      title: 'Where to attend',
      name: 'where',
      type: 'text'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
};
