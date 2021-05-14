export interface usuariosCadastro {
    completeName: string;
    email: string;
    phone: string;
    password: string;
}

export interface usuariosResponse {
    id?: number;
    complete_name?: string;
    email?: string;
    phone?: string;
    password?: string;
    created_at?: Date;
    update_at?: Date;
    status?: number;
    mensagem?: string;
}