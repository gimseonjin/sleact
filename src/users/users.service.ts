import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';

@Injectable()
export class UsersService {
    public postUser(data: JoinRequestDto){
        console.log(data)
        return data
    }
}
