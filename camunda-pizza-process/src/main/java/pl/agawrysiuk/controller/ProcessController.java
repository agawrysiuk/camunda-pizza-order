package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.camunda.dto.CamundaVariables;
import pl.agawrysiuk.camunda.messages.StepMessage;
import pl.agawrysiuk.camunda.process.ProcessManager;

@Slf4j
@RestController
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

    @GetMapping("/finish-step")
    public void goToNextStep(@RequestParam String processId) {
        log.info("Going to the next step of process id {}", processId);
        processManager.finishStep(processId);
    }
}
