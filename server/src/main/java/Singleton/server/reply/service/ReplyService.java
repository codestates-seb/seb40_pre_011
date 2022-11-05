package Singleton.server.reply.service;

import Singleton.server.content.entity.Content;
import Singleton.server.content.service.ContentService;
import Singleton.server.exception.BusinessLogicException;
import Singleton.server.exception.ExceptionCode;
import Singleton.server.reply.entity.Reply;
import Singleton.server.reply.repository.ReplyRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ReplyService {
    private final ReplyRepository replyRepository;
    private final ContentService contentService;

    public ReplyService(ReplyRepository replyRepository, ContentService contentService){
        this.replyRepository = replyRepository;
        this.contentService = contentService;}

    public Reply createReply(Reply reply){
        contentService.findVerifiedContent(reply.getContent().getContentId());
        return replyRepository.save(reply);
    }

    public Reply findReply(long replyId) { return findVerifiedReply(replyId);}

    public Reply findVerifiedReplyByQuery(long replyId) {
        Optional<Reply> optionalReply = replyRepository.findByReply(replyId);
        Reply findReply =
                optionalReply.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REPLY_NOT_FOUND));

        return findReply;
    }

    public Page<Reply> findReplys(int page, int size) {
        return replyRepository.findAll(PageRequest.of(page, size,
                Sort.by("replyId").descending()));
    }

    public Reply updateReply(Reply reply) {
        Reply findReply = findVerifiedReply(reply.getReplyId());

        Optional.ofNullable(reply.getReplyBody())
                .ifPresent(replyBody -> findReply.setReplyBody(replyBody));

        return replyRepository.save(findReply);
    }

    public void deleteReply(long replyId) {
        Reply reply = findVerifiedReply(replyId);
        replyRepository.delete(reply);
    }

    public Reply findVerifiedReply(long replyId) {
        Optional<Reply> optionalReply = replyRepository.findByReply(replyId);
        Reply findReply =
                optionalReply.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REPLY_NOT_FOUND));
        return findReply;
    }
}
