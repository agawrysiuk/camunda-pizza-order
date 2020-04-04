package pl.agawrysiuk.process;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.agawrysiuk.camunda.dto.CamundaVariables;

@SpringBootTest
@Slf4j
class ProcessManagerTest {

    @Autowired
    private ProcessManager manager;

    @Test
    void startProcess() throws JsonProcessingException {
        CamundaVariables variables = manager.startProcess("PizzaProcess");
        log.info(new ObjectMapper().writeValueAsString(variables));
        Assertions.assertNotNull(variables);
    }
}
