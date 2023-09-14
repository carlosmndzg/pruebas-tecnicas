import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const itemsPathFile = path.join(__dirname, '..', 'data', 'products.json')
const items = JSON.parse(fs.readFileSync(itemsPathFile, 'utf-8'))

export class ItemsModel {
  static async getItems({ query }) {
    const itemsFiltered = query
      ? items.filter(({ title }) => {
          const queryLowercased = query.toLowerCase()
          const titleLowercased = title.toLowerCase()

          return titleLowercased.includes(queryLowercased)
        })
      : items

    return itemsFiltered
  }

  static async getItem({ id }) {
    const item = items.find(item => item.id === id)

    return item
  }
}
