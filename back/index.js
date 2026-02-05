import express from 'express'
import cors from 'cors'
import { towns, _days } from './data.js'

const app = express()
app.use(cors())

app.get('/towns', (_, res) => {
    setTimeout(() => {
        res.json(towns)
    }, 500);
})

app.get('/_5day', (req, res) => {
    setTimeout(() => {
        if (req.query.key) {
            res.json([_days.get(Number(req.query.key)), towns.find(item => Number(item.Key) == Number(req.query.key))])
            return
        }
        res.json('no')
    }, 500)
})

app.listen(3000, () => {
    console.log('Server start!')
})