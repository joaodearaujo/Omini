package joaodearaujo.omini.dto.response;

import joaodearaujo.omini.domain.entity.Transaction;

import java.math.BigDecimal;
import java.util.List;

public record CardResponse(
        String id,
        String ownerName,
        String number,
        String expirationDate,
        String cardType,
        BigDecimal limit,
        BigDecimal limitUsed,
        BigDecimal balance
) {}
