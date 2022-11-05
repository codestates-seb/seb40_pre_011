package Singleton.server.member.mapper;

import Singleton.server.reply.dto.ReplyPatchDto;
import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.dto.ReplyResponseDto;
import Singleton.server.reply.entity.Reply;

public interface MemberMapper {
    Reply memberPostDtoToMember(ReplyPostDto replyPostDto);
    Reply memberPatchDtoToMember(ReplyPatchDto replyPatchDto);
    ReplyResponseDto memberToMemberResponseDto(Reply reply);
}
