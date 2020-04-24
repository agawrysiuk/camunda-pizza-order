package pl.agawrysiuk.pizzadatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.agawrysiuk.pizzashareddtos.model.Conversation;

public interface ConversationRepository extends JpaRepository<Conversation,Long> {
}
