package pl.agawrysiuk.camunda.process;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.exception.NullValueException;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.stereotype.Component;
import pl.agawrysiuk.camunda.utils.CamundaVariablesConverter;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;
import pl.agawrysiuk.pizzashareddtos.camunda.messages.StepMessage;
import pl.agawrysiuk.pizzashareddtos.camunda.messages.StepReplyMessage;

import java.util.Map;

@Slf4j
@Component
@RequiredArgsConstructor
public class ProcessManager {

    private final RuntimeService runtimeService;
    private final ProcessFacade processFacade;

    public CamundaVariables startProcess(String processName) {
        CamundaVariables variables = new CamundaVariables();
        Map<String, Object> variablesMap = CamundaVariablesConverter.convertToMap(variables);
        ProcessInstance instance = runtimeService.startProcessInstanceByKey(processName, variablesMap);
        variables.setProcessId(instance.getId());
        return variables;
    }

    public void finishStep(String processId, CamundaVariables variables) {
        processFacade.finishStep(processId, variables);
    }

    public StepMessage getStepMessage(String processId) {
        Map<String, Object> variablesMap;
        try {
            variablesMap = runtimeService.getVariables(processId);
            return StepMessage.builder()
                    .processId(processId)
                    .replyMessage(StepReplyMessage.REQUEST_OK)
                    .stepId((String) variablesMap.get("stepId"))
                    .build();
        } catch (NullValueException e) {
            log.info("Got request ID with invalid processId = {}", processId);
        }
        return StepMessage.builder()
                .replyMessage(StepReplyMessage.BAD_PROCESSID)
                .build();
    }
}
