package pl.agawrysiuk.pizzashareddtos.model;

import lombok.Getter;
import pl.agawrysiuk.pizzashareddtos.utils.validation.PizzeriaAnswered;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Getter
@Entity
@Table(name = "ADDITIONS")
public class Additions {
    @Id
    private Long id;
    @NotEmpty(groups = PizzeriaAnswered.class)
    private String addition;
    private String price;

}
