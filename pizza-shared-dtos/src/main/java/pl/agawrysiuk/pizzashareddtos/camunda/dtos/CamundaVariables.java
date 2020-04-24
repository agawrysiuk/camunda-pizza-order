package pl.agawrysiuk.pizzashareddtos.camunda.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.pizzashareddtos.dtos.DeliveryAddress;
import pl.agawrysiuk.pizzashareddtos.model.Additions;
import pl.agawrysiuk.pizzashareddtos.model.Pizza;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CamundaVariables {
    private String processId;
    private String stepId;
    private Pizza pizza = new Pizza();
    private DeliveryAddress deliveryAddress = new DeliveryAddress();
    private Additions additions;
}
