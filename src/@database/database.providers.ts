import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
          type: 'postgres',
          host: process.env.host,
          port: 5432,
          username: process.env.username,
          password: process.env.password,
          database: process.env.database,
          entities: [
              __dirname + '/../**/*.entity{.ts,.js}',
          ],
          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false
            }
          },
          // sincronia tempo real com o banco de dados
          synchronize: true,
        }),
      },
]