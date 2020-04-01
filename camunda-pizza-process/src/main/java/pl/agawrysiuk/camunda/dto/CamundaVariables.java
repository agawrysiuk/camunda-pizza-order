package pl.agawrysiuk.camunda.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.model.DeliveryAddress;
import pl.agawrysiuk.model.Pizza;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CamundaVariables {

    private String processId;
    private Pizza pizza = new Pizza();
    private DeliveryAddress deliveryAddress = new DeliveryAddress();
    private String additions;
}
