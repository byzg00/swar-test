const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

app.use(cors())

// Проксируем все запросы
app.use(
  createProxyMiddleware({
    target: 'https://support.swarmica.com/', // Адрес бэкенда
    changeOrigin: true,
    // ws: true, // Если нужны WebSocket-соединения
  }),
)

// Запуск сервера
const PORT = 4000
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`)
})
