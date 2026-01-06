import { type SchemaTypeDefinition } from 'sanity'

import category from './category'
import post from './post'
import author from './author'
import table from './table'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, table],
}
