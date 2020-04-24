package pl.agawrysiuk.pizzashareddtos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
    private String name;
    private String photo;
    private String components;
    private String price;
}
