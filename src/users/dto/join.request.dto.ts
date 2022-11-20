import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator'

export class JoinRequestDto{
    @ApiProperty({
        example : "kimseonjin616@naver.com",
        description : "이메일",
        required : true
    })
    @IsEmail()
    public email: string;    
    
    @ApiProperty({
        example : "carrykim",
        description : "닉네임",
        required : true
    })
    @IsString()
    public nickname: string;

    @ApiProperty({
        example : "pw123",
        description : "비밀번호",
        required : true
    })
    @IsString()
    public password: string;
}