package pl.agawrysiuk.pizzadatabase.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Entity
public class Conversation {
    @Id
    @JsonIgnore
    private Long id;
    private String choice;
    private String reaction;
}
