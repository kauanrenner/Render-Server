const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Servidor on')
})

app.get('/led?estado=on', (req, res) => {
    const ans = {
        estado: 'ativado'
    }
    res.json(ans)
})

app.get('/led?estado=off', (req, res) => {
    const ans = {
        estado: 'desativado'
    }
    res.json(ans)
})

app.get('/led?estado=status', (req, res) => {
    const ans = {
        estado: 'status'
    }
    res.json(ans)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
