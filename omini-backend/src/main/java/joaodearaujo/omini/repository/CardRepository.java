package joaodearaujo.omini.repository;

import joaodearaujo.omini.domain.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, String> {
}
