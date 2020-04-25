package pl.agawrysiuk.pizzashareddtos.model;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@Table(name = "LITERAL")
public class Literal {
    @Id
    private Long id;
    private String step;
    private String key;
    private String message;
    private String description;
}
