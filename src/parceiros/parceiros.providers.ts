import { Connection } from 'typeorm';
import { Parceiros } from './parceiros.entity';

export const parceirosProviders = [
    {
        provide: 'PARCEIROS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getTreeRepository(Parceiros),
        inject: ['DATABASE_CONNECTION'],
    }
]