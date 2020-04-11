package pl.agawrysiuk.camunda.process;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.BpmnError;
import org.springframework.stereotype.Component;
import pl.agawrysiuk.camunda.feign.CamundaClient;
import pl.agawrysiuk.camunda.messages.VariablesUpdateMessage;
import pl.agawrysiuk.camunda.model.CamundaVariables;
import pl.agawrysiuk.camunda.model.Task;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class ProcessFacade {

    private final CamundaClient camundaClient;

    public void finishStep(String processId, CamundaVariables variables) {
        List<Task> taskList = camundaClient.getActiveTasks(processId);
        boolean taskListResult = confirmListSizeOne(taskList);
        if (taskListResult) {
            updateVariables(processId, variables);
            completeTask(taskList.get(0));
        } else {
            throwCompleteTaskError(processId);
        }
    }

    private boolean confirmListSizeOne(List<Task> taskList) {
        return taskList.size() == 1;
    }

    private void updateVariables(String processId, CamundaVariables variables) {
        camundaClient.updateProcessVariables(processId, new VariablesUpdateMessage(variables));
    }

    private void completeTask(Task task) {
        log.info("Completing task for the process id {}", task.getProcessInstanceId());
        camundaClient.completeTask(task.getId(), "{}");
    }

    private void throwCompleteTaskError(String processId) {
        StringBuilder sb = new StringBuilder()
                .append("Too many instances of processId ")
                .append(processId)
                .append(". Unable to complete the task.");
        throw new BpmnError("-10", sb.toString());
    }
}
