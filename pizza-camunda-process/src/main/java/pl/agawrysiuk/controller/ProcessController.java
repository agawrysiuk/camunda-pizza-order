package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.agawrysiuk.camunda.process.ProcessManager;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;
import pl.agawrysiuk.pizzashareddtos.camunda.messages.StepMessage;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ProcessController {

    private final ProcessManager processManager;

    @GetMapping("/start")
    public CamundaVariables startProcess(@RequestParam String id) {
        log.info("Got a call to start the process name {}", id);
        return processManager.startProcess(id);
    }

    @GetMapping("/get-step")
    public StepMessage getStepMessage(@RequestParam String processId) {
        log.info("Checking process id {}", processId);
        return processManager.getStepMessage(processId);
    }

    @PostMapping(value = "/finish-step", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void goToNextStep(@RequestParam String processId, @RequestBody CamundaVariables variables) {
        log.info("Got a call to change the step of process id {}", processId);
        processManager.finishStep(processId, variables);
    }
}
