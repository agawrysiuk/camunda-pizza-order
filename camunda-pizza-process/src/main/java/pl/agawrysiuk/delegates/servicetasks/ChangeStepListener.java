package pl.agawrysiuk.delegates.servicetasks;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.springframework.web.client.RestTemplate;
import pl.agawrysiuk.camunda.dto.CamundaMessage;

@Slf4j
@RequiredArgsConstructor
public class ChangeStepListener implements ExecutionListener {

    private final RestTemplate restTemplate;

    @Override
    public void notify(DelegateExecution execution) throws Exception {
        String stepId = execution.getActivityInstanceId();
        String message = "Step changed!";

        CamundaMessage camundaMessage = new CamundaMessage();
        camundaMessage.setStepId(stepId);
        camundaMessage.setMessage(message);

        restTemplate.put("http://localhost:8080/switchStep",camundaMessage);
    }
}
