const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

let comandos = {};
let corpo = {};

app.get('/', (req, res) => {
    res.send('Servidor on')
})

app.get('/led=on', (req, res) => {
    const ans = {
        estado: 'Aberto'
    }
    res.json(ans)
    comandos.Comando = 'ON'
})

app.get('/led=off', (req, res) => {
    const ans = {
        estado: 'Fechado'
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
    res.json(comandos);
})

app.get('/cliente', (req, res) => {
    corpo = req.query
    res.send('Atualizado')
})

app.get('/arduino', (req, res) => {
    res.send(corpo)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
