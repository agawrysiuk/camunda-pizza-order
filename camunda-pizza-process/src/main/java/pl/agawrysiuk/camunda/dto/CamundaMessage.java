package pl.agawrysiuk.camunda.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@AllArgsConstructor
@Builder
public class CamundaMessage {
    private String processId;
    private String stepId;
    private String message;
    private CamundaVariables camundaVariables;
}
