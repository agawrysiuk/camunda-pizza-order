package pl.agawrysiuk.camunda.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import pl.agawrysiuk.camunda.dto.Task;

import java.util.List;

@FeignClient(value = "camundaClient", url = "http://localhost:8080/rest")
public interface CamundaClient {

    @GetMapping(value = "/task?processId={processId}")
    List<Task> getActiveTasks(@PathVariable("processId") String processId);
}
