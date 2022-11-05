package Singleton.server.content.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

@Builder
@Getter
@Setter
public class ContentTagResponseDto {

    private String tagName;
}
