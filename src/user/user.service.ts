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
  


  
 // signin (){
 //     private readonly user = [
  //      {
 //   
  //        userName: '',
 //         password: ''
  //      },
 //     ];
      
 //  findOne(_firstName: string): Promise<User | undefined> {
 //   return this.user.find(user => user.firstName === userName),( user=> user.password === password);
 // }



 //async validateUser(username: string, password: string): Promise<any> {
 // const user = await this.userModel.findOne();
 // if (user && user.password === password) {
 //   const { password, ...result } = user;
 //   return result;
 // }
 // return null;




