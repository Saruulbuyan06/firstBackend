
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'Saruul06',
      models: [User]
    }),
    SequelizeModule.forFeature([User])],
  providers: [UserService],
  controllers:[UserController]
})
export class UsersModule {}


