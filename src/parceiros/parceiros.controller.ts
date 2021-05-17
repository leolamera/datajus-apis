import { Controller, Post, Body, Res, Get, UseGuards } from '@nestjs/common';
import { parceirosResponse } from 'src/@types/parceiros.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ParceirosService } from './parceiros.service';

@Controller()
export class ParceirosController {

    constructor(
        private readonly parceiros: ParceirosService
    ) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async testeJWT() {
        return {
            mensagem: 'autenticado'
        }
    }

    @Post('storeParceiro')
    async postParceiro(@Body() body, @Res() response) {
        const parceiroStatus: parceirosResponse  = await this.parceiros.store(body)
        
        if (parceiroStatus.status) {
            return response.status(parceiroStatus.status).send({
                mensagem: parceiroStatus.mensagem
            })
        }

        return response.status(201).send(body)
    }

    @Post('authParceiro')
    async postAuthParceiro(@Body() body, @Res() response) {

        const authStatus: parceirosResponse = await this.parceiros.auth(body)

        if (authStatus.status) {
            return response.status(authStatus.status).send({
                mensagem: authStatus.mensagem
            })
        }

        return response.status(200).send(authStatus)
    }
}