package pl.agawrysiuk.pizzadatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.agawrysiuk.pizzashareddtos.model.Pizza;

public interface PizzaRepository extends JpaRepository<Pizza,Long> {
}
