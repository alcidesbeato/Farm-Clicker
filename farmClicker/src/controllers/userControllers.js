const { Router } = require('express');
const UsuarioService = require('../services/usuarioServices');


const routes = Router();

const usuarioService = new UsuarioService();

routes.get('/', async (_req, res) => {
    const usuario = await usuarioService.list();

    return res
    .status(200)
    .json(usuario);
})

routes.post('/', async  (req, res) => {
    const {body} = req;
    const  produto = await usuarioService.create(body);

    return res.status(201).json(produto);
})

routes.put('/:id', async (req, res) => {
    const {body,params} = req;
    const {id} = params;

    try{
        await usuarioService.updateById(id, body);
    }catch(error){
        return res.status(400).json({
            errorMessage: error.message
        })
    }

    return res.status(200).json({
        ok: true
    })
})

routes.delete('/:id', async (req, res) => {
    const {params} = req;
    const {id} = params;

    try{
        await usuarioService.deleteById(id);
    }catch(error){
        return res.status(400).json({
            errorMessage: error.message
        })
    }

    return res.status(200).json({
        ok: true
    })
})

module.exports = routes;