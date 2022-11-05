package Singleton.server.content.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class ContentTagDto {
    @Positive
    private Long tagID;

    private String tagName;
}
