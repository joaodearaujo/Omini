package joaodearaujo.omini.repository;

import joaodearaujo.omini.domain.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, String> {
}
