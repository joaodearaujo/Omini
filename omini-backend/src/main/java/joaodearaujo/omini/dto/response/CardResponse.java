package joaodearaujo.omini.dto.response;

import java.math.BigDecimal;
import java.time.YearMonth;

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
