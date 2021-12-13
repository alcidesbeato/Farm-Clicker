const {usuarios} = require('../models')

class UsuariosRepository{
    async list(){
        return await usuarios.findAll({
            attributes: {
                exclude: [],
            }
        })
        //coloca dentro do exclude os campos que vc nao quer que apareça
    }

    async create(currentUsuario){
        return await usuarios.create(currentUsuario);
    }

    async update(usuarioId, currentUsuario){
        return await usuarios.update(currentUsuario,{
            where: {
                id: usuarioId
            }
        });
    }

    async getById(usuarioId){
        return await usuarios.findByPk(usuarioId);
    }

    async deleteById(usuarioId){
        return await usuarios.destroy({
            where: {
                id: usuarioId
            }
        })
    }
}

module.exports = UsuariosRepository;