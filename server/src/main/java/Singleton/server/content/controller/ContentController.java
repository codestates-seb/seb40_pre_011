package Singleton.server.content.controller;

import Singleton.server.content.dto.ContentPatchDto;
import Singleton.server.content.dto.ContentPostDto;
import Singleton.server.content.entity.Content;
import Singleton.server.content.mapper.ContentMapper;
import Singleton.server.content.service.ContentService;
import Singleton.server.response.MultiResponseDto;
import Singleton.server.response.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/content")
@Validated
@Slf4j
public class ContentController {
    private ContentService contentService;
    private ContentMapper contentMapper;

    public ContentController(ContentService contentService, ContentMapper contentMapper){
        this.contentService = contentService;
        this.contentMapper = contentMapper;
    }

    @PostMapping
    public ResponseEntity postContent(@Valid @RequestBody ContentPostDto contentPostDto){
        Content content = contentService.createContent(contentMapper.contentPostDtoToContent(contentPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(contentMapper.contentToContentResponseDto(content)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{content-id}")
    public ResponseEntity patchContent(@PathVariable("content-id") long contentId,
                                       @Valid @RequestBody ContentPatchDto contentPatchDto) {
        contentPatchDto.setContentId(contentId);
        Content content = contentService.updateContent(contentMapper.contentPatchDtoToContent(contentPatchDto));
//        long memberId = content.getMemberId();   // 멤버 아이디가 동일하지 않으면 수정 불가
//        if(nowMemberId != memberId){return new ResponseEntity(HttpStatus.BAD_REQUEST);}

        return new ResponseEntity<>(
                new SingleResponseDto<>(contentMapper.contentToContentResponseDto(content)),HttpStatus.OK);
    }

    @GetMapping("/{content-id}")
    public ResponseEntity getContent(@PathVariable("content-id") long contentId){
        Content content = contentService.findContent(contentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(contentMapper.contentToContentResponseDto(content)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getContents(@Positive @RequestParam int page,
                                      @Positive @RequestParam int size) {
        Page<Content> pageContents = contentService.findContents(page - 1, size);
        List<Content> contents = pageContents.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(contentMapper.contentToContentResponseDtos(contents),
                        pageContents),
                HttpStatus.OK);
    }

    @DeleteMapping("/{content-id}")
    public ResponseEntity deleteContent(@PathVariable("content-id") long contentId){
//        Content content = contentService.findContent(contentId);      // 현재멤버아이디가 동일하지 않으면 삭제 안됨
//        long memberId = content.getMemberId();
//        if(nowMemberId != memberId){return new ResponseEntity(HttpStatus.BAD_REQUEST);}
        contentService.deleteContent(contentId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
