import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Module } from '@nestjs/common';
import { usuarioProviders } from './usuario.providers';
import { DatabaseModule } from 'src/@database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        UsuarioController,
    ],
    providers: [
        UsuarioService,
        ...usuarioProviders
    ],
    exports: [UsuarioService]
})
export class UsuarioModule { }
