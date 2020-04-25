package pl.agawrysiuk.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.agawrysiuk.feign.DatabaseClient;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;

@Service
@RequiredArgsConstructor
public class DatabaseService {

    private final DatabaseClient databaseClient;

    public PizzaDataDto getPizzaDataDto() {
        return databaseClient.getPizzaDto();
    }
}
