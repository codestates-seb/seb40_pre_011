package Singleton.server.reply.controller;

import Singleton.server.content.entity.Content;
import Singleton.server.reply.dto.ReplyPatchDto;
import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.entity.Reply;
import Singleton.server.reply.mapper.ReplyMapper;
import Singleton.server.reply.service.ReplyService;
import Singleton.server.response.MultiResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import Singleton.server.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reply")
@Validated
@Slf4j
public class ReplyController {
    private ReplyService replyService;
    private ReplyMapper replyMapper;

    public ReplyController(ReplyService replyService, ReplyMapper replyMapper){
        this.replyService = replyService;
        this.replyMapper = replyMapper;
    }


    //답글 생성
    @PostMapping
    public ResponseEntity postReply(
            @Valid @RequestBody ReplyPostDto replyPostDto){
        Reply reply =
                replyService.createReply(replyMapper.replyPostDtoToReply(replyPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToReplyResponseDto(reply, null)),
                HttpStatus.CREATED);
    }

    //답글 불러오기
    @GetMapping("/{reply-id}")
    public ResponseEntity getReply(@PathVariable("reply-id") long replyId){
        Reply reply = replyService.findReply(replyId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToReplyResponseDto(reply, null)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReplys(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Reply> pageReplys = replyService.findReplys(page - 1, size);
        List<Reply> replys = pageReplys.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(replyMapper.replyToReplyResponseDtos(replys),
                        pageReplys),
                HttpStatus.OK);
    }

    //답글 수정
    @PatchMapping("/{reply-id}")
    public ResponseEntity patchReply(@PathVariable("reply-id") @Positive long replyId,
                                     @Valid @RequestBody ReplyPatchDto replyPatchDto) {
        replyPatchDto.setReplyId(replyId);
        Reply reply = replyService.updateReply(replyMapper.replyPatchDtoToReply(replyPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToReplyResponseDto(reply, null)), HttpStatus.OK);
    }

    //답글 삭제
    @DeleteMapping("/{reply-id}")
    public ResponseEntity deleteReply(@PathVariable("reply-id") @Positive long replyId) {
        replyService.deleteReply(replyId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
