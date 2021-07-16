export default {
  title: 'Home Page',
  name: 'homepage',
  type: 'document',
  fields: [
    {
      title: 'Who we are',
      name: 'who',
      type: 'text',
    },
    {
      title: 'What we do',
      name: 'what',
      type: 'text',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
