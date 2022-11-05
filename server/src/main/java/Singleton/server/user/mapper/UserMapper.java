package Singleton.server.user.mapper;

import Singleton.server.reply.dto.ReplyPatchDto;
import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.dto.ReplyResponseDto;
import Singleton.server.reply.entity.Reply;
import Singleton.server.user.dto.SiteUserDto;
import Singleton.server.user.entity.SiteUser;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Bean;


@Mapper(componentModel = "spring")
public interface UserMapper {

}