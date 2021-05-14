import { Inject } from '@nestjs/common';
import { usuariosCadastro } from 'src/@types/usuarios.interface';
import { Repository } from 'typeorm';
import { Usuarios } from './usuario.entity';

export class UsuarioService {

    constructor(
        @Inject('USUARIO_REPOSITORY')
        private readonly usuarios: Repository<Usuarios>
    ) {}

    async findByEmail(email: string) {
        return await this.usuarios.findOne({ email })
    }

    async store(data: usuariosCadastro) {

        const { completeName: complete_name, email, phone, password } = data

        if (!complete_name || !email || !phone || !password) {
            return {
                status: 406,
                mensagem: "O body enviado é inválido, cheque a documentação."
            }
        }

        const usuarioFounded = await this.usuarios.findOne({ email })

        if (usuarioFounded) {
            return {
                status: 409,
                mensagem: "O e-mail informado já existe no banco de dados."
            }
        }

        const requestObject = {
            complete_name,
            email,
            phone: `+55${phone}`,
            password,
            created_at: new Date(),
            update_at: null
        }

        return this.usuarios.save(requestObject)

    }

}
