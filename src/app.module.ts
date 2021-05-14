import { UsuarioModule } from './usuarios/usuario.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './@database/database.module';
import { ParceiroModule } from './parceiros/parceiros.module';

@Module({
  imports: [
    UsuarioModule,
    AuthModule, DatabaseModule, ParceiroModule],
  controllers: [],
  providers: [AppService, ParceiroModule],
})
export class AppModule { }
