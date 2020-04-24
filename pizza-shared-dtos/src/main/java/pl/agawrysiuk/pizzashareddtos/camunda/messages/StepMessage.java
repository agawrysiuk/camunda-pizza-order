package pl.agawrysiuk.pizzashareddtos.camunda.messages;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StepMessage {
    private StepReplyMessage replyMessage;
    private String processId;
    private String stepId;
}
