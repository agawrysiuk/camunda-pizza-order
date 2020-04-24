package pl.agawrysiuk.pizzashareddtos.model;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@Table(name = "ADDITIONS")
public class Additions {
    @Id
    private Long id;
    private String addition;
    private String price;

}
