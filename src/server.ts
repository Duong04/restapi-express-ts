import app from '~/app'
import dotenv from 'dotenv'
import connectDB from '~/config/database'

const PORT = process.env.PORT || 3000
dotenv.config()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const startServer = async () => {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()
