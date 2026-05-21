package joaodearaujo.omini.service;

import joaodearaujo.omini.domain.entity.CreditCard;
import joaodearaujo.omini.dto.request.TransactionRequest;
import joaodearaujo.omini.dto.response.TransactionResponse;
import joaodearaujo.omini.repository.CardRepository;
import joaodearaujo.omini.repository.TransactionRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.Optional;

import static joaodearaujo.omini.domain.enums.TransactionCategory.FOOD;
import static joaodearaujo.omini.domain.enums.TransactionType.OUTCOME;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private CardRepository cardRepository;

    @InjectMocks
    private TransactionService transactionService;

    @Test
    void createTransaction_shouldReturnTransactionResponse_whenTransactionRequestExists() {

        //Arrange
        CreditCard card = new CreditCard("João", "1234", YearMonth.of(2027,12), new BigDecimal("5000"));
        when(cardRepository.findById(card.getId())).thenReturn(Optional.of(card));

        TransactionRequest request = new TransactionRequest(
                card.getId(),
                "Mercado",
                new BigDecimal("928"),
                OUTCOME,
                FOOD
        );

        //Act
        TransactionResponse response = transactionService.createTransaction(request);

        // Assert
        assertNotNull(response);
        assertEquals(card.getId(), response.cardId());
        assertEquals(new BigDecimal("928"), response.amount());
        assertEquals("Mercado", response.receiver());
        assertEquals(OUTCOME, response.type());
        assertEquals(FOOD, response.category());
    }
}