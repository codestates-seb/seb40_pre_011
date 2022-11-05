package Singleton.server.content.entity;

import Singleton.server.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "contentTag")
public class ContentTag  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;
    private String tagName;
//    @Enumerated(EnumType.STRING)
//    @Column
//    private ContentTag contentTag;

    @ManyToOne
    @JoinColumn(name = "content")
    private Content content;
}
