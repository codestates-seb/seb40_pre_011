package Singleton.server.content.entity;

import Singleton.server.audit.Auditable;
import Singleton.server.member.entity.Member;
import Singleton.server.reply.entity.Reply;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "CONTENTS")
public class Content extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contentId;

    public Content(long contentId){
        this.contentId = contentId;
        this.id = getId();
    }

    @Column
    private String title;

    @Column(length =  1000)
    private String body;

    @Column
    private int rec;

    @Column
    private String tags;

    @Column
    private Long id;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column (nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "content")
    private List<Reply> replys = new ArrayList<>();

//    @OneToMany(mappedBy = "content")
//    private List<ContentTag> contentTags = new ArrayList<>();

//    @ManyToOne
//    @JoinColumn(name = "memberId")
//    private Member member;
}
