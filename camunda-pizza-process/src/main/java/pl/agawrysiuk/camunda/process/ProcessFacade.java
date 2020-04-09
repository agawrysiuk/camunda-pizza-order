package pl.agawrysiuk.camunda.process;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.BpmnError;
import org.springframework.stereotype.Component;
import pl.agawrysiuk.camunda.dto.Task;
import pl.agawrysiuk.camunda.feign.CamundaClient;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class ProcessFacade {

    private final CamundaClient camundaClient;

    public void finishStep(String processId) {
        List<Task> taskList = camundaClient.getActiveTasks(processId);
        boolean taskListResult = checkTaskList(taskList);
        if(taskListResult) {
            log.info("Completing task for the process id {}", processId);
            completeTask(taskList.get(0));
        } else {
            throwCompleteTaskError(processId);
        }
    }

    private boolean checkTaskList(List<Task> taskList) {
        return taskList.size() == 1;
    }

    private void completeTask(Task task) {
        camundaClient.completeTask(task.getId(),"{}");
    }

    private void throwCompleteTaskError(String processId) {
        StringBuilder sb = new StringBuilder()
                .append("Too many instances of processId ")
                .append(processId)
                .append(". Unable to complete the task.");
        throw new BpmnError("-10",sb.toString());
    }
}
