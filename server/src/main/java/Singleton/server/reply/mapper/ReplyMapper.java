package Singleton.server.reply.mapper;

import Singleton.server.reply.dto.ReplyPatchDto;
import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.dto.ReplyResponseDto;
import Singleton.server.reply.entity.Reply;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReplyMapper {
    Reply replyPostDtoToReply(ReplyPostDto replyPostDto);
    Reply replyPatchDtoToReply(ReplyPatchDto replyPatchDto);
    ReplyResponseDto replyToReplyResponseDto(Reply reply);
}
