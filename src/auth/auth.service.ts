import { Injectable } from '@nestjs/common';


import { UsuarioService } from 'src/usuarios/usuario.service';

@Injectable()
export class AuthService { 

    constructor(
        private readonly usuarios: UsuarioService,
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usuarios.findByEmail(email);
        if (user && user.password === password) {
            return user
        }

        return null
    }
 }
