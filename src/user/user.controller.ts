import { Controller, Get,Post,Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Post ('/signin')   //signin gej handah ym bol 
    signIn(@Body ()body ){    
      return this.userService.signIn(body)       //user service iin signin gedeg funktsiig ajilluuad return hii gej bna
    }
    @Post('signup')
    signUp(@Body() data) {
      return this.userService.signUp(data);
    }
    
    }
  

//   @Post('/create')           
// createUser(@Body() Body: userBody) {
//   return{message: "signed up",Body}
// }
  





