package pl.agawrysiuk.pizzadatabase.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.agawrysiuk.pizzadatabase.repository.AdditionsRepository;
import pl.agawrysiuk.pizzadatabase.repository.ConversationRepository;
import pl.agawrysiuk.pizzadatabase.repository.LiteralRepository;
import pl.agawrysiuk.pizzadatabase.repository.PizzaRepository;
import pl.agawrysiuk.pizzashareddtos.dtos.LiteralDto;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;
import pl.agawrysiuk.pizzashareddtos.model.Literal;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DatabaseService {

    private final ConversationRepository conversationRepository;
    private final AdditionsRepository additionsRepository;
    private final PizzaRepository pizzaRepository;
    private final LiteralRepository literalRepository;

    public PizzaDataDto getPizzaDataDto() {
        PizzaDataDto dto = new PizzaDataDto();
        dto.setConversations(conversationRepository.findAll());
        dto.setAdditions(additionsRepository.findAll());
        dto.setPizzas(pizzaRepository.findAll());
        return dto;
    }

    public List<LiteralDto> getLiterals() {
        List<Literal> literals = literalRepository.findAll();
        return literals.stream()
                .map(this::buildLiteral)
                .collect(Collectors.toList());
    }

    private LiteralDto buildLiteral(Literal literal) {
        return LiteralDto.builder()
                .key(literal.getKey())
                .message(literal.getMessage())
                .step(literal.getStep())
                .build();
    }
}
