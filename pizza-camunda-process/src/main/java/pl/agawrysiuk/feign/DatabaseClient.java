package pl.agawrysiuk.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import pl.agawrysiuk.pizzashareddtos.dtos.LiteralDto;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;

import java.util.List;

@FeignClient(value = "databaseClient", url = "http://localhost:8090")
public interface DatabaseClient {

    @GetMapping("/data")
    PizzaDataDto getPizzaDto();

    @GetMapping("/literals")
    List<LiteralDto> getLiterals();
}
