import { Connection } from 'typeorm';
import { Usuarios } from './usuario.entity';

export const usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getTreeRepository(Usuarios),
        inject: ['DATABASE_CONNECTION'],
    }
]