import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto{
    @ApiProperty({
        example : "kimseonjin616@naver.com",
        description : "이메일",
        required : true
    })
    public email: string;    
    
    @ApiProperty({
        example : "carrykim",
        description : "닉네임",
        required : true
    })
    public nickname: string;

    @ApiProperty({
        example : "pw123",
        description : "비밀번호",
        required : true
    })
    public password: string;
}