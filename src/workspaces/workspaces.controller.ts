import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
    @Post()
    getMyWorkspaces(){

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
