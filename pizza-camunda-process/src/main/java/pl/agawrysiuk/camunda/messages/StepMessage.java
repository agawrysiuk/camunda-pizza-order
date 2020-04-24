package pl.agawrysiuk.camunda.messages;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.enums.StepReplyMessage;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StepMessage {
    private StepReplyMessage replyMessage;
    private String processId;
    private String stepId;
}
