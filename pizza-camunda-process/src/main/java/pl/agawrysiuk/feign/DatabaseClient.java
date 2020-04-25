package pl.agawrysiuk.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import pl.agawrysiuk.pizzashareddtos.dtos.PizzaDataDto;

@FeignClient(value = "databaseClient", url = "http://localhost:8090")
public interface DatabaseClient {

    @GetMapping("/data")
    PizzaDataDto getPizzaDto();
}
