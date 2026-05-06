import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Table Rows (JSON Array)',
      description: 'Paste a JSON array to be converted to a table. E.g. [{"Feature": "Speed", "Value": "Fast"}]',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'caption',
      title: 'Table Caption',
      type: 'string'
    })
  ],
  preview: {
    select: {
      caption: 'caption',
      rows: 'rows'
    },
    prepare({ caption, rows }) {
      return {
        title: caption || 'Table',
        subtitle: rows ? 'Has data' : 'Empty'
      }
    }
  }
})
