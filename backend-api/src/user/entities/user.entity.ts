import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    first_name: string;

    @Column({ type: 'varchar'})
    last_name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar'})
    password: string;


    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'boolean', default: true })
    is_active: boolean;

}
