import { CategoryEnum } from './../enum/product.enum';
import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { IProduct } from '../interfaces/product.interface'
import { ObjectID } from 'typeorm';
import { v4 } from 'uuid';


@Entity('product')
export class Product implements IProduct {
        
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ type: 'uuid', generated: 'uuid', unique: true })
    id: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'enum', nullable: false, enum: CategoryEnum, default: CategoryEnum.OUTROS })
    category: CategoryEnum;
    
    @Column({ type: 'bigint', nullable: false })
    value: number;

    @Column({ type: 'varchar', nullable: false })
    imageUrl: string;

    @Column({ type: 'varchar', nullable: false })
    manufacturer: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt: Date;

    @BeforeInsert()
    generate = () => {
        this.id = v4()
    }
}

export default new Product();