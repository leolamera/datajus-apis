import { Controller, Post, Body, Res } from '@nestjs/common';
import { usuariosResponse } from 'src/@types/usuarios.interface';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {

    constructor(
        private readonly usuarios: UsuarioService
    ) {}

    @Post('storeUser')
    async postUsuario(@Body() body, @Res() response) {

        const usuarioStatus: usuariosResponse = await this.usuarios.store(body)

        if(usuarioStatus.status) {
            return response.status(usuarioStatus.status).send({
                mensagem: usuarioStatus.mensagem
            })
        }

        return response.status(201).send(usuarioStatus)
    }
}
