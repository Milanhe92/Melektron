export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Naslov',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'quantumContent',
      title: 'Kvantni Sadržaj',
      type: 'array',
      of: [{type: 'block'}, {type: 'quantumField'}]
    }
  ]
}