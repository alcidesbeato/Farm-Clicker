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

    async create(currentusuario){
        return await usuarios.create(currentusuario);
    }

    async update(usuarioId, currentusuario){
        return await usuarios.update(currentusuario,{
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