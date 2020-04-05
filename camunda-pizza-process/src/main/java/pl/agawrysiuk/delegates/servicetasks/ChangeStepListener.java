package pl.agawrysiuk.delegates.servicetasks;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.web.client.RestTemplate;
import pl.agawrysiuk.camunda.dto.CamundaMessage;
import pl.agawrysiuk.camunda.dto.CamundaVariables;
import pl.agawrysiuk.utils.ConvertCamundaVariables;

@Slf4j
@RequiredArgsConstructor
public class ChangeStepListener implements ExecutionListener {

    private final RestTemplate restTemplate;

    @Override
    public void notify(DelegateExecution execution) {
        CamundaMessage camundaMessage = buildMessage(execution);
        restTemplate.put("http://localhost:8080/switchStep", camundaMessage);
    }

    private CamundaMessage buildMessage(DelegateExecution execution) {
        CamundaVariables variables = ConvertCamundaVariables.convertToVariables(execution.getVariables());
        return CamundaMessage.builder()
                .processId(execution.getProcessInstanceId())
                .stepId(execution.getCurrentActivityId())
                .message("Step changed!")
                .camundaVariables(variables)
                .build();
    }
}
