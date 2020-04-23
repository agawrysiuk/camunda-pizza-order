package pl.agawrysiuk.pizzadatabase.model;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@Table(name = "CONVERSATION")
public class Conversation {
    @Id
    private Long id;
    private String choice;
    private String reaction;
}
