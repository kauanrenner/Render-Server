const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Servidor on')
})

app.get('/led', (req, res) => {
    const ans = {
        estado: 'ativado'
    }
    res.json(ans)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
