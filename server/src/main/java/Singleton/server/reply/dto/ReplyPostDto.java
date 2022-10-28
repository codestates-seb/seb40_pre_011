package Singleton.server.reply.dto;

import Singleton.server.member.entity.Member;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class ReplyPostDto {
    @Positive
    private long memberId;

    @Positive
    private long contentId;

    @NotBlank
    private String replyBody;

//    public Member getMember() {
//        Member member = new Member();
//        member.setMemberId(memberId);
//        return member;
//    }
}
