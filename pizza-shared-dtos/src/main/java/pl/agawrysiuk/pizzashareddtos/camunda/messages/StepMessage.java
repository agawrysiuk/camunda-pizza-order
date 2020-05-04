package pl.agawrysiuk.pizzashareddtos.camunda.messages;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StepMessage {
    private StepReplyMessage replyMessage;
    private String processId;
    private String stepId;
}
