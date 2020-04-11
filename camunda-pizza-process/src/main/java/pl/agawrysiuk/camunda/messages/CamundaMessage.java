package pl.agawrysiuk.camunda.messages;

import lombok.*;
import pl.agawrysiuk.camunda.model.CamundaVariables;

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
