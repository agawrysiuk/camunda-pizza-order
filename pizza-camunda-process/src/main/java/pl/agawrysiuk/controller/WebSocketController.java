package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.pizzashareddtos.camunda.messages.CamundaMessage;

import java.util.Timer;
import java.util.TimerTask;

@Slf4j
@RestController
@RequiredArgsConstructor
public class WebSocketController {

    private final SimpMessagingTemplate template;

    @PutMapping("/switch-step")
    public void switchStep(@RequestBody CamundaMessage message) {
        // timer to not outrun WebSocket connection
        new Timer().schedule(
                new TimerTask() {
                    @Override
                    public void run() {
                        log.info("Sending step-change message to front for processId: {}", message.getProcessId());
                        template.convertAndSendToUser(message.getProcessId(),"/next", message);
                    }
                },
                1000
        );
    }
}
