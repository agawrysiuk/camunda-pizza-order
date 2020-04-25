package pl.agawrysiuk.camunda.delegates.listeners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.web.client.RestTemplate;
import pl.agawrysiuk.camunda.utils.CamundaVariablesConverter;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;
import pl.agawrysiuk.pizzashareddtos.camunda.messages.CamundaMessage;

@Slf4j
@RequiredArgsConstructor
public class ChangeStepListener implements ExecutionListener {

    private final RestTemplate restTemplate;

    @Override
    public void notify(DelegateExecution execution) {
        CamundaMessage camundaMessage = buildMessage(execution);
        restTemplate.put("http://localhost:8080/switch-step", camundaMessage);
    }

    private CamundaMessage buildMessage(DelegateExecution execution) {
        CamundaVariables variables = CamundaVariablesConverter.convertToVariables(execution.getVariables());
        return CamundaMessage.builder()
                .processId(execution.getProcessInstanceId())
                .stepId(execution.getCurrentActivityId())
                .message("Step changed!")
                .camundaVariables(variables)
                .build();
    }
}
