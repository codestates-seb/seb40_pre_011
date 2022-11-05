package Singleton.server.content.mapper;

import Singleton.server.content.dto.ContentPatchDto;
import Singleton.server.content.dto.ContentPostDto;
import Singleton.server.content.dto.ContentResponseDto;
import Singleton.server.content.dto.ContentTagDto;
import Singleton.server.content.entity.Content;
import Singleton.server.content.entity.ContentTag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ContentMapper {
    Content contentPostDtoToContent(ContentPostDto contentPostDto);

    Content contentPatchDtoToContent(ContentPatchDto contentPatchDto);

    ContentResponseDto contentToContentResponseDto(Content content);

    List<ContentResponseDto> contentToContentResponseDtos(List<Content> contents);

//    List<ContentTag> contentTagsDtosToContentTags(List<ContentTagDto> contentTagDtos, Content content);
}