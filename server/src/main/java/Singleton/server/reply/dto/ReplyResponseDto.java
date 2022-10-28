package Singleton.server.reply.dto;

import Singleton.server.member.entity.Member;
import Singleton.server.content.entity.Content;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class ReplyResponseDto {
    private long memberId;
    private long contentId;
    private long replyId;
    private String replyBody;
    private boolean replySelect;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
    public void setContent(Content content) {
        this.contentId = content.getContentId();
    }
}
