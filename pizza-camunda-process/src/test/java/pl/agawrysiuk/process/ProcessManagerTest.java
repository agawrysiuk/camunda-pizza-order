package pl.agawrysiuk.process;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.agawrysiuk.camunda.messages.StepMessage;
import pl.agawrysiuk.camunda.model.CamundaVariables;
import pl.agawrysiuk.camunda.process.ProcessManager;

@SpringBootTest
@Slf4j
class ProcessManagerTest {

    @Autowired
    private ProcessManager manager;

    @Test
    void starting_process_assert_variables_not_null() throws JsonProcessingException {
        CamundaVariables variables = manager.startProcess("PizzaProcess");
        log.info(new ObjectMapper().writeValueAsString(variables));
        Assertions.assertNotNull(variables);
    }

    @Test
    void given_processId_return_message() throws JsonProcessingException {
        StepMessage message = manager.getStepMessage("123");
        log.info(new ObjectMapper().writeValueAsString(message));
    }
}
