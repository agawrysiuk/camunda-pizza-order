package pl.agawrysiuk.pizzashareddtos.camunda.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.pizzashareddtos.dtos.DeliveryAddress;
import pl.agawrysiuk.pizzashareddtos.model.Additions;
import pl.agawrysiuk.pizzashareddtos.model.Pizza;

import javax.validation.constraints.NotEmpty;
import javax.validation.groups.Default;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CamundaVariables {

    @NotEmpty(groups = {Default.class})
    private String processId;
    @NotEmpty(groups = {Default.class})
    private String stepId;
    private Pizza pizza = new Pizza();
    private DeliveryAddress deliveryAddress = new DeliveryAddress();
    private Additions additions;
}
