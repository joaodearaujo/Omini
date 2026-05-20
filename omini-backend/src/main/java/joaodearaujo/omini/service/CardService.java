package joaodearaujo.omini.service;

import joaodearaujo.omini.domain.entity.Card;
import joaodearaujo.omini.domain.entity.CreditCard;
import joaodearaujo.omini.domain.entity.DebitCard;
import joaodearaujo.omini.dto.request.CardRequest;
import joaodearaujo.omini.dto.response.CardResponse;
import joaodearaujo.omini.repository.CardRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public CardResponse createCard(CardRequest request) {
        Card card = convertToEntity(request);
        cardRepository.save(card);
        return convertToResponse(card);
    }

    public List<CardResponse> findAll() {
       return cardRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public CardResponse findById(String id) {
        return cardRepository.findById(id)
                .map(this::convertToResponse)
                .orElseThrow(() -> new RuntimeException("Card not found: " + id));
    }

    private CardResponse convertToResponse(Card card) {

        String cardType;
        BigDecimal limit = null;
        BigDecimal limitUsed = null;
        BigDecimal balance = null;

        if (card instanceof CreditCard creditCard) {
            cardType = "CREDIT";
            limit = creditCard.getLimit();
            limitUsed = creditCard.getLimitUsed();
        } else {
            cardType = "DEBIT";
            DebitCard debitCard = (DebitCard) card;
            balance = debitCard.getBalance();
        }

        return new CardResponse(
                card.getId(),
                card.getOwnerName(),
                card.getNumber(),
                card.getExpirationDate().toString(),
                cardType,
                limit,
                limitUsed,
                balance
        );
    }

    private Card convertToEntity(CardRequest request) {
        YearMonth expiration = YearMonth.parse(request.expirationDate());

        if ("CREDIT".equals(request.cardType())) {
            return new CreditCard(
                    request.ownerName(),
                    request.number(),
                    expiration,
                    request.limit()
            );
        } else {
            return new DebitCard(
                    request.ownerName(),
                    request.number(),
                    expiration,
                    request.balance()
            );
        }
    }
}

