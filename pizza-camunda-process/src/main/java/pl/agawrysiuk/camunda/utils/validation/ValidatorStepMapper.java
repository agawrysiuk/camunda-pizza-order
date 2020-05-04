package pl.agawrysiuk.camunda.utils.validation;

import lombok.experimental.UtilityClass;
import pl.agawrysiuk.camunda.utils.validation.classess.PizzeriaAnswered;
import pl.agawrysiuk.camunda.utils.validation.classess.WriteAddress;
import pl.agawrysiuk.pizzashareddtos.Step;

import java.util.HashMap;
import java.util.Map;

@UtilityClass
public class ValidatorStepMapper {

    public Map<String,Class> classMap = new HashMap<>() {{
       put(Step.PIZZERIA_ANSWERED.toString(), PizzeriaAnswered.class);
       put(Step.WRITE_ADDRESS.toString(), WriteAddress.class);
    }};

}
