package pl.agawrysiuk.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import pl.agawrysiuk.camunda.dto.CamundaVariables;

import java.util.Map;

public class ConvertCamundaVariables {

    private ConvertCamundaVariables() {}

    public static Map<String, Object> convertToMap(CamundaVariables variables) {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.convertValue(variables, Map.class);
    }
}
