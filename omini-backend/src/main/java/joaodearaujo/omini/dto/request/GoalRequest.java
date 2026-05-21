package joaodearaujo.omini.dto.request;

import java.math.BigDecimal;

public record GoalRequest(
    String name,
    BigDecimal targetAmount
) {}
