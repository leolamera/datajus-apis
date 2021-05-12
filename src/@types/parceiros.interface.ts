export interface parceirosCadastro {
    completeName: string;
    email: string;
    phone: string;
    cpf: string;
    cnpj: string;
}


export interface parceirosLogin {
    email: string;
    cpf: string;
}

export interface parceirosResponse {

    id?: number;
    complete_name?: string;
    email?: string;
    phone?: string;
    cpf?: string;
    cnpj?: string;
    created_at?: Date;
    update_at?: Date;
    status?: number;
    mensagem?: string;
}
