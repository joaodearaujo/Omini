package joaodearaujo.omini.dto.request;

import java.math.BigDecimal;

public record CardRequest(
        String ownerName,
        String number,
        String expirationDate,
        String cardType,
        BigDecimal limit,
        BigDecimal balance
) {}
