package pl.agawrysiuk.camunda.utils;

import lombok.experimental.UtilityClass;
import pl.agawrysiuk.pizzashareddtos.Step;
import pl.agawrysiuk.pizzashareddtos.utils.validation.PizzeriaAnswered;
import pl.agawrysiuk.pizzashareddtos.utils.validation.WriteAddress;

import java.util.HashMap;
import java.util.Map;

@UtilityClass
public class ValidatorStepMapper {

    public Map<String,Class> classMap = new HashMap<>() {{
       put(Step.PIZZERIA_ANSWERED.toString(), PizzeriaAnswered.class);
       put(Step.WRITE_ADDRESS.toString(), WriteAddress.class);
    }};

}
