package pl.agawrysiuk.process;

import lombok.RequiredArgsConstructor;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProcessManager {

    private final RuntimeService runtimeService;

    public void startProcess(String processName) {
//        runtimeService.startProcessInstanceById(processName);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(processName);
    }
}
