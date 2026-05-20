package joaodearaujo.omini.repository;

import joaodearaujo.omini.domain.entity.Card;
import joaodearaujo.omini.domain.entity.Transaction;
import joaodearaujo.omini.domain.enums.TransactionCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, String> {
    List<Transaction> findByCard(Card card);
    List<Transaction> findByCardAndCategory(Card card, TransactionCategory category);
    List<Transaction> findByCardAndDateBetween(Card card, LocalDate start, LocalDate end);
}
