import { Role } from './../enum/user.enum';
import { IUser } from './../interfaces/user.interface';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ObjectID } from 'typeorm'
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

@Entity('user')
export class User implements IUser {
    
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ type: 'uuid', generated: 'uuid', unique: true })
    id: string;

    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ select: false , type: 'varchar', nullable: false, length: 8 })
    password: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER, nullable: false })
    role: Role;

    @Column({ type: 'varchar', unique: true, nullable: false })
    document: string;

    @Column({ type: 'varchar', length: 11, nullable: false })
    phone: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt: Date;

    @BeforeInsert()
    hashPassword = async () => {
        if (!!this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

    @BeforeInsert()
    generate = () => {
        this.id = v4()
    }

}

export default new User();