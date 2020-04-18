package pl.agawrysiuk.camunda.model;

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
//@JsonSerialize(using = UpdateMessageSerializer.class)
public class CamundaVariables {
    private String processId;
//    @JsonSerialize(using = UpdateMessageSerializer.class)
    private String stepId;
//    @JsonSerialize(using = UpdateMessageSerializer.class)
    private Pizza pizza = new Pizza();
//    @JsonSerialize(using = UpdateMessageSerializer.class)
    private DeliveryAddress deliveryAddress = new DeliveryAddress();
//    @JsonSerialize(using = UpdateMessageSerializer.class)
    private String additions;
}
