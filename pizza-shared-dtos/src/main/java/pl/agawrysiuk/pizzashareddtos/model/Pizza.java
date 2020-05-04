package pl.agawrysiuk.pizzashareddtos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.pizzashareddtos.utils.validation.PizzeriaAnswered;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "PIZZA")
public class Pizza {
    @Id
    @JsonIgnore
    private Long id;

    @NotEmpty(groups = PizzeriaAnswered.class)
    private String name;
    @NotEmpty(groups = PizzeriaAnswered.class)
    private String photo;
    @NotEmpty(groups = PizzeriaAnswered.class)
    private String components;
    @NotEmpty(groups = PizzeriaAnswered.class)
    private String price;
}
