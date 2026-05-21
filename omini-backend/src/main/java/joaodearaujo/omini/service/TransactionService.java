package joaodearaujo.omini.service;

import joaodearaujo.omini.domain.entity.Card;
import joaodearaujo.omini.domain.entity.Transaction;
import joaodearaujo.omini.dto.request.TransactionRequest;
import joaodearaujo.omini.dto.response.TransactionResponse;
import joaodearaujo.omini.repository.CardRepository;
import joaodearaujo.omini.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final CardRepository cardRepository;

    public TransactionService(TransactionRepository transactionRepository, CardRepository cardRepository) {
        this.transactionRepository = transactionRepository;
        this.cardRepository = cardRepository;
    }

    public TransactionResponse createTransaction(TransactionRequest request) {

        Card card = cardRepository.findById(request.cardId())
                .orElseThrow(() -> new RuntimeException("Card not found: " + request.cardId()));

        Transaction transaction = convertToEntity(request);
        transaction.setCard(card);

        transactionRepository.save(transaction);
        return convertToResponse(transaction);
    }

    public List<TransactionResponse> findAll() {
        return transactionRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<TransactionResponse> findByCard(String cardId) {

        Card card = cardRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found: " + cardId));

        return transactionRepository.findByCard(card)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    private TransactionResponse convertToResponse(Transaction transaction) {
        return new TransactionResponse(
                transaction.getId(),
                transaction.getCard().getId(),
                transaction.getReceiver(),
                transaction.getAmount(),
                transaction.getType(),
                transaction.getCategory(),
                transaction.getDate()
        );
    }

    private Transaction convertToEntity(TransactionRequest request) {
        return new Transaction(
                request.receiver(),
                request.amount(),
                request.type(),
                request.category()
        );
    }
}
