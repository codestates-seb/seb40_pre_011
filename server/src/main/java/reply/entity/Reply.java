package reply.entity;

import java.time.LocalDateTime;

public class Reply {
    private Long replyId;
    private String replyBody;
    private String replySelect;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Long contentId;
    private Long memberId;
}
