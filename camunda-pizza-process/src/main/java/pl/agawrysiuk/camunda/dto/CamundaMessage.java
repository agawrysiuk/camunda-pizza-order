package pl.agawrysiuk.camunda.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
public class CamundaMessage {
    private String stepId;
    private String message;
}
