package Singleton.server.content.dto;

import Singleton.server.content.entity.ContentTag;
import Singleton.server.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class ContentResponseDto {
    private long id;
    private long contentId;
    private String title;
    private String body;
    private int rec;
    private String tags;
//    private List<ContentTagDto> contentTags;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public void setMember(Member member) {
        this.id = member.getId();
    }
}
