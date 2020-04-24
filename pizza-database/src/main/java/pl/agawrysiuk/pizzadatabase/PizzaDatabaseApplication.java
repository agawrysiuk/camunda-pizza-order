package pl.agawrysiuk.pizzadatabase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("pl.agawrysiuk.pizzashareddtos")
public class PizzaDatabaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(PizzaDatabaseApplication.class, args);
	}

}
