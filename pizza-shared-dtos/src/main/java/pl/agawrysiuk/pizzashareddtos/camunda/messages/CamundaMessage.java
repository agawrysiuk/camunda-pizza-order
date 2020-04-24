package pl.agawrysiuk.pizzashareddtos.camunda.messages;

import lombok.*;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CamundaMessage {
    private String processId;
    private String stepId;
    private String message;
    private CamundaVariables camundaVariables;
}
