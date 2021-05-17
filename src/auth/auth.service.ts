import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsuarioService } from 'src/usuarios/usuario.service';

@Injectable()
export class AuthService { 

    constructor(
        private usuarios: UsuarioService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usuarios.findByEmail(email);
        if (user && user.password === password) {
            return user
        }

        return null
    }

    async login(user: any) {
        const payload = { email: user.email, id: user.id }
        return {
            acess_token: this.jwtService.sign(payload)
        }
    }
 }
