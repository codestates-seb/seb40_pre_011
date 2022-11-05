package Singleton.server.content.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ContentPatchDto {
    private long contentId;
    private String title;
    private String body;
    private String tags;

    public void setContentId(long contentId) {
        this.contentId = contentId;
    }
}
