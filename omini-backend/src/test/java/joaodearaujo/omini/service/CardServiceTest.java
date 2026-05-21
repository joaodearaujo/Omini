package joaodearaujo.omini.service;

import joaodearaujo.omini.domain.entity.CreditCard;
import joaodearaujo.omini.dto.request.CardRequest;
import joaodearaujo.omini.dto.response.CardResponse;
import joaodearaujo.omini.repository.CardRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.Optional;

import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CardServiceTest {

    @Mock
    private CardRepository cardRepository;

    @InjectMocks
    private CardService cardService;

    @Test
    void findById_shouldReturnCardResponse_whenCardExists() {

        // Arrange
        CreditCard card = new CreditCard(
                "João",
                "1234 5678 9012 3456",
                YearMonth.of(2027, 12),
                new BigDecimal("5000")
        );
        when(cardRepository.findById("123")).thenReturn(Optional.of(card));

        // Act
        CardResponse response = cardService.findById("123");

        // Assert
        assertNotNull(response);
        assertEquals("João", response.ownerName());
        assertEquals("CREDIT", response.cardType());
        assertEquals(new BigDecimal("5000"), response.limit());
        assertNull(response.balance());
    }

    @Test
    void findById_shouldThrowException_whenCardNotFound() {

        // Arrange
        when(cardRepository.findById("456")).thenReturn(Optional.empty());

        // Assert
        assertThrows(RuntimeException.class, () -> cardService.findById("456"));
    }

    @Test
    void createCard_shouldReturnCardResponse_whenCreditCardRequest() {

        //Arrange
        CardRequest request = new CardRequest(
                "João",
                "1234 5678 9012 3456",
                "2032-09",
                "CREDIT",
                new BigDecimal("5000"),
                null
        );

        // Act
        CardResponse response = cardService.createCard(request);

        // Assert
        assertNotNull(response);
        assertEquals("João", response.ownerName());
        assertEquals("CREDIT", response.cardType());
        assertEquals(new BigDecimal("5000"), response.limit());
        assertNull(response.balance());
    }
}