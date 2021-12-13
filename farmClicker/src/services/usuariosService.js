const UsuariosRepository = require("../db/repositories/usuarioRepository");

class UsuariosService{
    usuariosRepository = new UsuariosRepository();
    async list(){
        return await this.usuariosRepository.list();
    }

    async create(usuario){
        return await this.usuariosRepository.create(usuario);
    }

    async updateById(usuarioId, usuario){
        const usuarioExiste = await this.usuariosRepository.getById(usuarioId);
        if(!usuarioExiste){
            throw new Error('nao existe um usuario com esse id');
        }
        await this.usuariosRepository.update(usuarioId,usuario);

        return await this.usuariosRepository.getById(usuarioId);
    }

    async deleteById(usuarioId){
        const usuarioExiste = await this.usuariosRepository.getById(usuarioId);
        if(!usuarioExiste){
            throw new Error('nao existe um usuario com esse id');
        }
        await this.usuariosRepository.deleteById(usuarioId);
    }

}
module.exports = UsuariosService;