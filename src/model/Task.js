import mongoose from "mongoose";

const Task = mongoose.model("Task", {
    nome: String,
    objetivo: String,
    formacaoAcademica: String,
    perfilProfissional: String,
    consideracoesFinais: String,
})

export default Task;
