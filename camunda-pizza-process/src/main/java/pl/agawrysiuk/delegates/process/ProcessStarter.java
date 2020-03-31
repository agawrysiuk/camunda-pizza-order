package pl.agawrysiuk.delegates.process;

import lombok.RequiredArgsConstructor;
import org.camunda.bpm.engine.RuntimeService;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProcessStarter {

    private final RuntimeService runtimeService;

    public void startProcess(String processName) {
//        runtimeService.startProcessInstanceById(processName);
        runtimeService.startProcessInstanceByKey(processName);
    }
}
