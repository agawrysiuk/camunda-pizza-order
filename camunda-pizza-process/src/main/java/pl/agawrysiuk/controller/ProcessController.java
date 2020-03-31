package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.delegates.process.ProcessStarter;

@RestController
@RequiredArgsConstructor
public class ProcessController {

    private final ProcessStarter processStarter;

    @GetMapping("/start")
    public ResponseEntity<Object> startProcess(@RequestParam String id) {
        processStarter.startProcess(id);
        return ResponseEntity.ok().build();
    }
}
