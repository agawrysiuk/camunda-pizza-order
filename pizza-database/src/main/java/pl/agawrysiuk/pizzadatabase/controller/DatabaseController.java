package pl.agawrysiuk.pizzadatabase.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.pizzadatabase.model.Conversation;
import pl.agawrysiuk.pizzadatabase.service.DatabaseService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class DatabaseController {

    private final DatabaseService service;

    @GetMapping("/conversations")
    public List<Conversation> getConversation() {
        return service.findAllConversations();
    }

}
