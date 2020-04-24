package pl.agawrysiuk.pizzadatabase.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.pizzadatabase.service.DatabaseService;
import pl.agawrysiuk.pizzashareddtos.model.Conversation;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class DatabaseController {

    private final DatabaseService service;

    @GetMapping("/conversations")
    public List<Conversation> getConversation() {
        return service.findAllConversations();
    }

}
