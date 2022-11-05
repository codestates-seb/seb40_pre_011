package Singleton.server.content.service;

import Singleton.server.content.entity.Content;
import Singleton.server.content.entity.ContentTag;
import Singleton.server.content.repository.ContentRepository;
import Singleton.server.exception.BusinessLogicException;
import Singleton.server.exception.ExceptionCode;
import Singleton.server.reply.entity.Reply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContentService {
    private final ContentRepository contentRepository;

    public ContentService(ContentRepository contentRepository){
        this.contentRepository = contentRepository;}

    public Content createContent(Content content){
        return contentRepository.save(content);
    }

    public Content findContent(long contentId) {return findVerifiedContent(contentId);}

    public Page<Content> findContents(int page, int size){
        return contentRepository.findAll(PageRequest.of(page, size,
                Sort.by("contentId").descending()));
    }

    public Content updateContent(Content content){
        Content findContent = findVerifiedContent(content.getContentId());

        Optional.ofNullable(content.getTitle())
                .ifPresent(title -> findContent.setTitle(title));
        Optional.ofNullable(content.getBody())
                .ifPresent(body -> findContent.setBody(body));
        Optional.ofNullable(content.getTags())
                .ifPresent(tags -> findContent.setTags(tags));

        return contentRepository.save(findContent);
    }

    public void deleteContent(long contentId){
        Content content = findVerifiedContent(contentId);
        contentRepository.delete(content);
    }

    public Content findVerifiedContent(long contentId){
        Optional<Content> optionalContent = contentRepository.findById(contentId);
        Content findContent =
                optionalContent.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.CONTENT_NOT_FOUND));
        return findContent;
    }

    public Content findVerifiedContentByQuery(long contentId){
        Optional<Content> optionalContent = contentRepository.findByContent(contentId);
        Content findContent =
                optionalContent.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.CONTENT_NOT_FOUND));
        return findContent;
    }

}
