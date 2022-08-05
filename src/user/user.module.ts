
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from 'src/authentication/auth.service';
import { AuthController } from 'src/authentication/auth.controller';
import { User } from 'src/models/auth.model';
import { Verification } from 'src/models/verification.model';
import { CounselingModel } from 'src/models/counseling.model';
import { CounselingService } from 'src/counseling/counseling.service';
import { CounselingController } from 'src/counseling/counseling.controller';

@Module({
  imports: [

    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'Saruul06',
      models: [User, Verification, CounselingModel]
    }),
    SequelizeModule.forFeature([User, Verification, CounselingModel])],
  providers: [AuthService, CounselingService],
  controllers: [AuthController, CounselingController]
})
export class UsersModule { }


