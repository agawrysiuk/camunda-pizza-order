package pl.agawrysiuk.camunda.utils;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.experimental.UtilityClass;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;

import java.util.Map;

@UtilityClass
public class CamundaVariablesConverter {

    private final ObjectMapper MAPPER = new ObjectMapper() {{
        findAndRegisterModules();
        configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
        configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }};

    public Map<String, Object> convertToMap(CamundaVariables variables) {
        return MAPPER.convertValue(variables, Map.class);
    }

    public CamundaVariables convertToVariables(Map<String,Object> map) {
        return MAPPER.convertValue(map, CamundaVariables.class);
    }
}
