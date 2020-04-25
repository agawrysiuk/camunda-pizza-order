package pl.agawrysiuk.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.agawrysiuk.pizzashareddtos.dtos.LiteralDto;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;
import pl.agawrysiuk.service.DatabaseService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class DatabaseController {

    private final DatabaseService service;

    @GetMapping("/data")
    public PizzaDataDto getConversation() {
        return service.getPizzaDataDto();
    }

    @GetMapping("/literals")
    public List<LiteralDto> getLiterals() {
        return service.getLiterals();
    }

}
