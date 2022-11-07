import { Body, Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    getUsers(@Req() req){
        return req.user;
    }

    @Post()
    postUser(@Body() data: JoinRequestDto){
        return this.usersService.postUser(data);
    }

    @Post()
    login(@Req() req){
        return req.user;
    }

    @Post()
    logOut(@Req() req, @Res() res){
        req.logOut();
        res.clearCokkie('connect.sid', {httpOnly : true});
        res.send('ok');
    }

}
