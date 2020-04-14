package pl.agawrysiuk.utils;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import pl.agawrysiuk.camunda.model.CamundaVariables;

import java.util.Map;

public class CamundaVariablesConverter {

    private static final ObjectMapper MAPPER = new ObjectMapper() {{
        findAndRegisterModules();
        configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
        configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }};

    private CamundaVariablesConverter() {}

    public static Map<String, Object> convertToMap(CamundaVariables variables) {
        return MAPPER.convertValue(variables, Map.class);
    }

    public static CamundaVariables convertToVariables(Map<String,Object> map) {
        return MAPPER.convertValue(map, CamundaVariables.class);
    }
}
