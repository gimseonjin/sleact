import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:urldms')
export class DmsController {

    @Get(':id/chats')
    getChat(@Query() query, @Param() param){
        console.log(query, param)
    }

    @Post(':id/chats')
    postChat(@Body() data){

    }
}
