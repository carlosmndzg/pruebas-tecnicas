import express from 'express'
import './utils/envLoader.js'
import itemsRouter from './routes/items.routes.js'

const app = express()
const port = process.env.PORT ?? 8000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/items', itemsRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
