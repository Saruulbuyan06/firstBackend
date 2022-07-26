import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({ primaryKey: true })
    id: string;
    @Column
    firstName: string;

    // @Column
    // password: string;

    @Column({ defaultValue: true })
    isActive: boolean;
}