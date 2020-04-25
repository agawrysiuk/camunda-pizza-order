package pl.agawrysiuk.pizzadatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.agawrysiuk.pizzashareddtos.model.Literal;

public interface LiteralRepository extends JpaRepository<Literal,Long> {
}
