package pl.agawrysiuk.camunda.validation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pl.agawrysiuk.camunda.utils.ValidatorStepMapper;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import javax.validation.groups.Default;
import java.util.Set;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataValidator {

    private final Validator validator;

    public void validate(CamundaVariables variables) {
        Class theClass = ValidatorStepMapper.classMap.get(variables.getStepId());
        Set<ConstraintViolation<CamundaVariables>> violations;
        if(theClass != null) {
            violations = validator.validate(variables, theClass, Default.class);
        } else {
            violations = validator.validate(variables, Default.class);
        }
        if(!violations.isEmpty()) {
            violations.forEach(violation -> log.error(violation.getMessage()));
        }
    }
}
