package Singleton.server.content.service;

import Singleton.server.content.entity.Content;
import Singleton.server.content.entity.ContentTag;
import Singleton.server.content.repository.ContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentTagService {
    ContentRepository contentRepository;

    public ContentTagService(ContentRepository contentRepository){
        this.contentRepository = contentRepository;
    }

    public void deleteContentTags(Content content){
        long contentId = content.getContentId();
//        List<ContentTag> contentTags = contentRepository.findAllByContentId(contentId);
//        contentRepository.save(contentTags);
    }
}
