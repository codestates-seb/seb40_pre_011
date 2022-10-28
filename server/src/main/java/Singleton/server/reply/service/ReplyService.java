package Singleton.server.reply.service;

import Singleton.server.reply.entity.Reply;
import Singleton.server.reply.repository.ReplyRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository){this.replyRepository = replyRepository;}

    public Reply createReply(Reply reply){

        return replyRepository.save(reply);
    }

//    public Reply findReply(long replyId) {
//        Optional<Reply> optionalReply = replyRepository.findByReply(replyId);
//
//        return optionalReply;
//    }

    public void deleteReply(long replyId) {

    }
}
