package Singleton.server.reply.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import Singleton.server.reply.entity.Reply;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    @Query(value = "SELECT c FROM Reply c WHERE c.replyId = :replyId")
    Optional<Reply> findByReply(long replyId);
}
