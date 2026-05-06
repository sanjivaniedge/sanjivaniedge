import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
        {
          type: 'table', 
        }
      ],
    }),
    defineField({
        name: 'featuredPost',
        title: 'Featured Post',
        type: 'boolean'
    }),
    defineField({
        name: 'estimatedReadTime',
        title: 'Estimated Read Time (minutes)',
        type: 'number'
    }),
    defineField({
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
            { name: 'metaTitle', type: 'string', title: 'Meta Title' },
            { name: 'metaDescription', type: 'text', title: 'Meta Description' }
        ]
    }),
    defineField({
        name: 'faqs',
        title: 'FAQs (JSON Array)',
        description: 'Paste a JSON array of FAQs. E.g. [{"question": "What is...?", "answer": "It is..."}]',
        type: 'text',
        rows: 10
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
