package pl.agawrysiuk.pizzadatabase.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.agawrysiuk.pizzadatabase.model.Conversation;
import pl.agawrysiuk.pizzadatabase.repository.ConversationRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DatabaseService {

    private final ConversationRepository conversationRepository;

    public List<Conversation> findAllConversations() {
        return conversationRepository.findAll();
    }

}
