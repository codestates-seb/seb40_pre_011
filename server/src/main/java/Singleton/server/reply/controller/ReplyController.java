package Singleton.server.reply.controller;

import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.entity.Reply;
import Singleton.server.reply.mapper.ReplyMapper;
import Singleton.server.reply.service.ReplyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import Singleton.server.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
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
                new SingleResponseDto<>(replyMapper.replyToReplyResponseDto(reply)),
                HttpStatus.CREATED);

//                                    @RequestParam("replyId") long replyId,
//                                    @RequestParam("memberId") long memberId,
//                                    @RequestParam("contentId") long contentId,
//                                    @RequestParam("replyBody") boolean replyBody,
//                                    @RequestParam("replySelect") boolean replySelect
//                                    ){
//
//        Map<String, Object> body = new HashMap<>();
//        body.put("replyId", replyId);
//        body.put("memberId", memberId);
//        body.put("contentId", contentId);
//        body.put("replyBody", replyBody);
//        body.put("replySelect", replySelect);
//
//      return new ResponseEntity<Map>(body, HttpStatus.CREATED);
    }

    //답글 수정
    @PatchMapping("/reply/{reply-id}")
    public ResponseEntity patchReply(@RequestParam("replyId") long replyId,
                                    @RequestParam("memberId") long memberId,
                                    @RequestParam("contentId") long contentId,
                                    @RequestParam("replyBody") boolean replyBody,
                                    @RequestParam("replySelect") boolean replySelect
    ){
        Map<String, Object> body = new HashMap<>();
        body.put("replyId", replyId);
        body.put("memberId", memberId);
        body.put("contentId", contentId);
        body.put("replyBody", replyBody);
        body.put("replySelect", replySelect);

        return new ResponseEntity<Map>(body, HttpStatus.OK);
    }

    //답글 삭제
    @DeleteMapping
    public ResponseEntity deleteReply(@PathVariable("reply-id") @Positive long replyId) {
        replyService.deleteReply(replyId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
