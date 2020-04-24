package pl.agawrysiuk.pizzadatabase.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.agawrysiuk.pizzadatabase.repository.ConversationRepository;
import pl.agawrysiuk.pizzashareddtos.model.Conversation;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DatabaseService {

    private final ConversationRepository conversationRepository;

    public List<Conversation> findAllConversations() {
        return conversationRepository.findAll();
    }

}
