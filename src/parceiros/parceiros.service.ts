import { Parceiros } from './parceiros.entity';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { parceirosCadastro, parceirosLogin } from 'src/@types/parceiros.interface';


export class ParceirosService {

    constructor(
        @Inject('PARCEIROS_REPOSITORY')
        private readonly parceiros: Repository<Parceiros>
    ) {}

    async store(data: parceirosCadastro) {

        const { completeName: complete_name, email, phone, cpf, cnpj } = data

        if (!complete_name || !email || !phone || !cpf || !cnpj) {
            return {
                status: 406,
                mensagem: "O body enviado é inválido, cheque a documentação."
            }
        }

        const parceiroFounded = await this.parceiros.findOne({ email })

        if (parceiroFounded && parceiroFounded.email === email) {
            return {
                status: 409,
                mensagem: "O e-mail informado já existe no banco de dados."
            }
        }

        const requestObject = {
            complete_name, 
            email, 
            phone: `+55${phone}`, 
            cpf, 
            cnpj,
            created_at: new Date(),
            update_at: null
        } 
        
        return this.parceiros.save(requestObject)    
    }

    async auth(data: parceirosLogin) {

        const parceiroFounded = await this.parceiros.findOne({ email: data.email })

        if (!parceiroFounded) {
            return {
                status: 404,
                mensagem: "O e-mail informado não consta em nosso banco de dados."
            }
        }

        if (parceiroFounded.cpf !== data.cpf) {
            return {
                status: 401,
                mensagem: "O e-mail informado não tem o cpf informado como chave."
            }
        }

        delete parceiroFounded.created_at
        delete parceiroFounded.update_at

        return parceiroFounded

    }
}