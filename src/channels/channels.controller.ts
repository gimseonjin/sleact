import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {

    @Get()
    getAllChannels(){

    }

    @Post()
    createChannels(){

    }

    @Get(':name')
    getChannel (){
        
    }

    @Get(':name/chats')
    getChats(@Query() query, @Param() param){
        console.log(query, param)
    }

    @Post(':name/chats')
    postChat(@Body() data){

    }

    @Get(':name/members')
    getAllMembers(){

    }

    @Post()
    inviteMembers(){
        
    }

}
