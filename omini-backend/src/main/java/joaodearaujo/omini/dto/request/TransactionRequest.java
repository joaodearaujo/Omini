package joaodearaujo.omini.dto.request;

import joaodearaujo.omini.domain.entity.Card;
import joaodearaujo.omini.domain.enums.TransactionCategory;
import joaodearaujo.omini.domain.enums.TransactionType;

import java.math.BigDecimal;

public record TransactionRequest(
    String cardId,
    String receiver,
    BigDecimal amount,
    TransactionType type,
    TransactionCategory category
) {}
