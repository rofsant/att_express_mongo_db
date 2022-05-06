import express from "express";
import mongoose from "mongoose";
import Task from "./model/Task.js";

import 'dotenv/config'


const app = express();

app.use(express.json());

app.post("/task", async (req, res) =>{
    const {nome, objetivo, formacaoAcademica, perfilProfissional, consideracoesFinais}= req.body

    const task = {nome, objetivo, formacaoAcademica, perfilProfissional, consideracoesFinais}

    try{
        await Task.create(task)
        res.status(201).json({message:"Realização de cadastro concluída!"})
    }catch(error){
        res.status(500).json({error:error})
    }
});

app.get("/task", async (req, res) =>{
    try{
        const tasks = await Task.find()
        res.json(tasks)
    }catch(error){
        res.status(500).json({error:error})
    }
})

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Banco Conectado!")
        app.listen(3000,()=> console.log("O Servidor está funcionando!"))
    })
    .catch((error)=> console.log(error))
