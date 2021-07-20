export default {
  title: 'Join Page',
  name: 'joinpage',
  type: 'document',
  fields: [
    {
      title: 'How to join',
      name: 'how',
      type: 'text'
    },
    {
      title: 'When to join',
      name: 'when',
      type: 'text'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
}
