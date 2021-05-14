import { Entity, Tree, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Tree("adjacency-list")
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    complete_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column({ type: 'timestamp' })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    update_at: Date;
}