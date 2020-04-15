package pl.agawrysiuk.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import pl.agawrysiuk.camunda.messages.VariablesUpdateMessage;
import pl.agawrysiuk.camunda.model.CamundaVariables;

class UpdateMessageSerializerTest {

    private static final String REQUIRED_OUTPUT = "{\"modifications\":{\"processId\":{\"value\":\"123-dafsd-123\"},\"stepId\":{\"value\":null},\"pizza\":{\"name\":{\"value\":null},\"photo\":{\"value\":null},\"components\":{\"value\":null},\"price\":{\"value\":22.0}},\"deliveryAddress\":{\"name\":{\"value\":null},\"phone\":{\"value\":null},\"street\":{\"value\":\"Biała\"},\"building\":{\"value\":null},\"suite\":{\"value\":null},\"city\":{\"value\":null},\"zipCode\":{\"value\":null}},\"additions\":{\"value\":null}},\"deletions\":[]}";

    @Test
    void given_update_message_return_correct_json() throws JsonProcessingException {
        CamundaVariables variables = new CamundaVariables();
        VariablesUpdateMessage message = new VariablesUpdateMessage(variables);
        message.getModifications().setProcessId("123-dafsd-123");
        message.getModifications().getPizza().setPrice(22.0);
        message.getModifications().getDeliveryAddress().setStreet("Biała");
        String json = UpdateMessageConverter.convertToJson(message);
        Assertions.assertEquals(REQUIRED_OUTPUT,json);
    }

}
