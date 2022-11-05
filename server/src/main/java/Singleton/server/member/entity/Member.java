package Singleton.server.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String pwd;

    @Column
    private String since;

    @Column
    private String lastLogin;

//    @OneToMany(mappedBy = "member")
    @Column
    private Long contentId;

//    @OneToMany(mappedBy = "member")
    @Column
    private Long replyId;
}
