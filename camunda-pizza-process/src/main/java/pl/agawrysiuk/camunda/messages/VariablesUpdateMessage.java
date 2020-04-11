package pl.agawrysiuk.camunda.messages;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pl.agawrysiuk.camunda.model.CamundaVariables;

@Getter
@Setter
@AllArgsConstructor
public class VariablesUpdateMessage {
    private CamundaVariables modifications;
}
