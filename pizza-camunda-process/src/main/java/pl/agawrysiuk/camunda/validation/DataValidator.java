package pl.agawrysiuk.camunda.validation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pl.agawrysiuk.camunda.utils.validation.ValidatorStepMapper;
import pl.agawrysiuk.pizzashareddtos.camunda.dtos.CamundaVariables;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Set;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataValidator {

    private final Validator validator;

    public void validate(CamundaVariables variables) {
        Set<ConstraintViolation<CamundaVariables>> violations = validator.validate(variables, ValidatorStepMapper.classMap.get(variables.getStepId()));
        if(!violations.isEmpty()) {
            // throw new Exception
        }
    }
}
