package joaodearaujo.omini.dto.response;

import joaodearaujo.omini.domain.entity.Card;
import joaodearaujo.omini.domain.enums.TransactionCategory;
import joaodearaujo.omini.domain.enums.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionResponse(
        String id,
        String cardId,
        String receiver,
        BigDecimal amount,
        TransactionType type,
        TransactionCategory category,
        LocalDate date
) {}
