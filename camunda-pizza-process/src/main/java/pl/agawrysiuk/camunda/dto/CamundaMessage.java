package pl.agawrysiuk.camunda.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Slf4j
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
