import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Messages storage file
const dataFile = path.join(__dirname, 'messages.json')

// Ensure messages.json exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([], null, 2), 'utf-8')
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Soumesh Portfolio Backend API',
    version: '1.0.0'
  })
})

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.'
      })
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      })
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'unread',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    }

    // Read existing messages
    let messages = []
    try {
      const fileData = fs.readFileSync(dataFile, 'utf-8')
      messages = JSON.parse(fileData || '[]')
    } catch {
      messages = []
    }

    messages.unshift(newMessage)

    // Save back to disk
    fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2), 'utf-8')

    console.log(`[Contact API] Received new message from ${newMessage.name} <${newMessage.email}>`)

    return res.status(201).json({
      success: true,
      message: 'Message delivered successfully! Thank you for reaching out, Soumesh will get back to you soon.',
      id: newMessage.id,
      timestamp: newMessage.createdAt
    })
  } catch (error) {
    console.error('[Contact API Error]:', error)
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.'
    })
  }
})

// Retrieve messages (useful for local inspection)
app.get('/api/messages', (req, res) => {
  try {
    const fileData = fs.readFileSync(dataFile, 'utf-8')
    const messages = JSON.parse(fileData || '[]')
    res.json({
      success: true,
      count: messages.length,
      messages: messages
    })
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not read messages.' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running at http://localhost:${PORT}`)
})
