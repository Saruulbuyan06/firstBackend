import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
//import { AppService } from 'src/app.service';
@Injectable()
export class UserService {
  push: any;
  user3: any;
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {
   userModel.sync()
   }
  getUsers() {
  
    return this.userModel.findAll();
  }
  signIn(data) {
    let user = this.userModel.findOne({
where :{
firstName: data.firstName
}
    })
  
return user
  }

  signUp (user){
let user2 =  new this.userModel({
  id:"fdsfs",
  firstName: user.firstName,
  lastName: user.password,
  
})
user2.save()
return "successfully signed up"

  }

}
  
