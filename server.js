import express from "express";
import fs from 'fs/promises';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


const data = await fs.readFile('./data/dados.json', 'utf-8');
const json = JSON.parse(data);


app.get('/categorias', async (req, res) => {

    res.send(json.categorias)

    console.log(json.categorias)
})

app.get('/vendas', async (req, res) => {

    var marca = req.query.marca

    console.log(json.vendas[marca])
    res.send(json.vendas[marca])
})


app.listen(3000);