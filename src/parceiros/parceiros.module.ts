import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/@database/database.module';
import { ParceirosController } from './parceiros.controller';
import { parceirosProviders } from './parceiros.providers';
import { ParceirosService } from './parceiros.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ParceirosController],
    providers: [
        ParceirosService,
        ...parceirosProviders
    ]
})
export class ParceiroModule {}