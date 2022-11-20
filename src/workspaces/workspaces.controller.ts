import { Controller, Delete, Get, HttpException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("WORKSPACE")
@Controller('api/workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces(){
        throw new HttpException("400",400)
    }

    @Post()
    createWorkspace(){

    }

    @Get(":url/members")
    getAllMembers(){

    }

    @Post(":url/members")
    inviteMembersWorkspace(){
        
    }

    @Delete(":url/members/:id")
    kickMembersWorkspace(){
        
    }

    @Get(":url/members/:id")
    getMemberWorkspace(){
        
    }
}
