package pl.agawrysiuk.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StepReplyMessage {
    REQUEST_OK,
    BAD_PROCESSID,
    PROCESS_FINISHED
}
