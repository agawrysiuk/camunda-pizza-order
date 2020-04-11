package pl.agawrysiuk.camunda.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import pl.agawrysiuk.camunda.messages.VariablesUpdateMessage;
import pl.agawrysiuk.camunda.model.Task;

import java.util.List;

@FeignClient(value = "camundaClient", url = "http://localhost:8080/rest")
public interface CamundaClient {

    @GetMapping(value = "/task?processInstanceId={processId}")
    List<Task> getActiveTasks(@PathVariable("processId") String processId);

    @PostMapping(value = "/process-instance/{processId}/variables")
    void updateProcessVariables(@PathVariable String processId, VariablesUpdateMessage request);

    @PostMapping(value = "/task/{taskId}/complete", consumes = MediaType.APPLICATION_JSON_VALUE)
    void completeTask(@PathVariable("taskId") String taskId, String jsonBody);
}
