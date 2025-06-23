import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    return res.json({ token })
  }

  res.status(401).json({ error: 'Credenciales inválidas' })
})

export default router
