package pl.agawrysiuk.pizzadatabase.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.agawrysiuk.pizzadatabase.repository.AdditionsRepository;
import pl.agawrysiuk.pizzadatabase.repository.ConversationRepository;
import pl.agawrysiuk.pizzadatabase.repository.PizzaRepository;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;

@Service
@RequiredArgsConstructor
public class DatabaseService {

    private final ConversationRepository conversationRepository;
    private final AdditionsRepository additionsRepository;
    private final PizzaRepository pizzaRepository;

    public PizzaDataDto getPizzaDataDto() {
        PizzaDataDto dto = new PizzaDataDto();
        dto.setConversations(conversationRepository.findAll());
        dto.setAdditions(additionsRepository.findAll());
        dto.setPizzas(pizzaRepository.findAll());
        return dto;
    }
}
