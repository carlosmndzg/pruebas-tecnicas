import { ItemsModel } from '../models/items.model.js'

export const getItems = async (req, res) => {
  const { q } = req.query
  const items = await ItemsModel.getItems({ query: q })

  res.status(200).json({
    status: 'success',
    data: {
      items
    }
  })
}

export const getItem = async (req, res) => {
  const id = Number(req.params.id)
  const item = await ItemsModel.getItem({ id })

  if (item == null) {
    res.status(404).json({
      status: 'fail',
      data: {
        error: `Itm not found with ID: ${id}`
      }
    })
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        item
      }
    })
  }
}
