
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from 'src/authentication/auth.service';
import { AuthController } from 'src/authentication/auth.controller';
import { User } from 'src/models/auth.model';
import { Verification } from 'src/models/verification.model';

@Module({
  imports: [

    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'Saruul06',
      models: [User, Verification]
    }),
    SequelizeModule.forFeature([User, Verification])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class UsersModule { }


