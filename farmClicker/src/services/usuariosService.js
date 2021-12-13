const UsuariosRepository = require("../db/repositories/usuarioRepository");

class UsuariosService{
    usuariosRepository = new UsuariosRepository();
    async list(){
        return await this.usuariosRepository.list();
    }

    async create(produto){
        return await this.usuariosRepository.create(produto);
    }

    async updateById(produtoId, produto){
        const usuariosExiste = await this.usuariosRepository.getById(produtoId);
        if(!usuariosExiste){
            throw new Error('nao existe um produto com esse id');
        }
        await this.usuariosRepository.update(produtoId,produto);

        return await this.usuariosRepository.getById(produtoId);
    }

    async deleteById(produtoId){
        const usuariosExiste = await this.usuariosRepository.getById(produtoId);
        if(!usuariosExiste){
            throw new Error('nao existe um produto com esse id');
        }
        await this.usuariosRepository.deleteById(produtoId);
    }

}
module.exports = UsuariosService;