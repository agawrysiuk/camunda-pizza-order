package pl.agawrysiuk.camunda.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.Task;

import java.util.List;

@FeignClient(value = "camundaClient", url = "http://localhost:8080/rest")
public interface CamundaClient {

    @GetMapping(value = "/task?processInstanceId={processId}")
    List<Task> getActiveTasks(@PathVariable("processId") String processId);

    @PostMapping(value = "/task/{taskId}/complete", consumes = MediaType.APPLICATION_JSON_VALUE)
    void completeTask(@PathVariable("taskId") String taskId, String jsonBody);
}
