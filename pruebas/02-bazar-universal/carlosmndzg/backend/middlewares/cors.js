export default function cors() {
  return (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
  }
}
