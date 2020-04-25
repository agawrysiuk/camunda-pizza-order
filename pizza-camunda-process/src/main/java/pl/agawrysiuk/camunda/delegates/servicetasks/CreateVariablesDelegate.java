package pl.agawrysiuk.camunda.delegates.servicetasks;

import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

@Slf4j
public class CreateVariablesDelegate implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        delegateExecution.setVariable("processId",delegateExecution.getProcessInstanceId());
        log.info("CreateVariablesDelegate started");
    }
}
