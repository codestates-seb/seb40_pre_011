package Singleton.server.reply.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ReplyPatchDto {
    private long replyId;

    private String replyBody;

    public void setReplyId(long replyId) {
        this.replyId = replyId;
    }
}
