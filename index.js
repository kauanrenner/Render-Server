const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

let comandos = {};

app.get('/', (req, res) => {
    res.send('Servidor on')
})

app.get('/led=on', (req, res) => {
    const ans = {
        estado: 'ativado'
    }
    res.json(ans)
    comandos.Comando = 'ON'
})

app.get('/led=off', (req, res) => {
    const ans = {
        estado: 'desativado'
    }
    res.json(ans)
    comandos.Comando = 'OFF'
})

app.get('/led=status', (req, res) => {
    const ans = {
        estado: 'status'
    }
    res.json(ans)
    comandos.Comando = 'STATUS'
})

app.get('/commands', (req, res) => {
    res.send("COMANDO ENVIADO")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
