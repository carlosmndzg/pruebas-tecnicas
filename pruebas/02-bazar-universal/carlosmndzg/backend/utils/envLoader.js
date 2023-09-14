import fs from 'node:fs'
import path from 'node:path'

const loadEnv = () => {
  const defaultLocation = path.join(path.dirname(process.argv[1]), '.env')

  try {
    const contents = fs.readFileSync(defaultLocation, 'utf8')

    contents.split('\n').forEach(line => {
      const [key, value] = line.split('=')
      process.env[key] = value
    })
  } catch (e) {
    if (e.errno === -4058) {
      console.error('\x1b[31mCould not find .env file.\x1b[0m')
    } else {
      console.error('Unknown error.', e)
    }
  }
}

loadEnv()
