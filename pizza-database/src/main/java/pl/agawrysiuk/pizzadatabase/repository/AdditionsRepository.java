package pl.agawrysiuk.pizzadatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.agawrysiuk.pizzashareddtos.model.Additions;

public interface AdditionsRepository extends JpaRepository<Additions, Long> {
}
