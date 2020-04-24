package pl.agawrysiuk.pizzashareddtos.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.pizzashareddtos.model.Additions;
import pl.agawrysiuk.pizzashareddtos.model.Conversation;
import pl.agawrysiuk.pizzashareddtos.model.Pizza;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PizzaDataDto {
    private List<Pizza> pizzas;
    private List<Conversation> conversations;
    private List<Additions> additions;
}
