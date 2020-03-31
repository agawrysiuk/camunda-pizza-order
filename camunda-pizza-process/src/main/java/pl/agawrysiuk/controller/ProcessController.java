package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.delegates.process.ProcessStarter;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ProcessController {

    private final ProcessStarter processStarter;

    @GetMapping("/start")
    public ResponseEntity<Object> startProcess(@RequestParam String id) {
        log.info("Got a call to start the process id {}",id);
        processStarter.startProcess(id);
        return ResponseEntity.ok().build();
    }
}
