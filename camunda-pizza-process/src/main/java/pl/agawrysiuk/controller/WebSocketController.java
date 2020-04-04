package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.camunda.dto.CamundaMessage;

@Slf4j
@RestController
@RequiredArgsConstructor
public class WebSocketController {

    private final SimpMessagingTemplate template;

    @PutMapping("/switchStep")
    public void switchStep(@RequestBody CamundaMessage message) {
        log.info("Sending message to front: {}", message);
    }

    @MessageMapping("/send/step-change")
    public void onReceivedMessage(String message) {
        this.template.convertAndSend("/process-change/",message);
    }
}
