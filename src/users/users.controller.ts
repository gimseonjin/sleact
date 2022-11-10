import { Body, Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags("USER")
@Controller('api/users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiResponse({
        type : UserDto
    })
    @ApiOperation({summary : "내 정보 조회"})
    @Get()
    getUsers(@Req() req){
        return req.user as UserDto;
    }

    @ApiOperation({summary : "회원가입"})
    @Post()
    postUser(@Body() data: JoinRequestDto){
        return this.usersService.postUser(data);
    }

    @ApiResponse({
        status : 200,
        description : "성공",
        type : UserDto
    })
    @ApiOperation({summary : "로그인"})
    @Post('login')
    login(@Req() req){
        return req.user;
    }

    @ApiOperation({summary : "로그아웃"})
    @Post('logout')
    logOut(@Req() req, @Res() res){
        req.logOut();
        res.clearCokkie('connect.sid', {httpOnly : true});
        res.send('ok');
    }

}
