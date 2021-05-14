import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsuarioModule } from 'src/usuarios/usuario.module';

@Module({
    imports: [UsuarioModule],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],
})
export class AuthModule { }
