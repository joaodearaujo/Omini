package joaodearaujo.omini.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;

public record GoalResponse(
        String id,
        String name,
        BigDecimal targetAmount,
        BigDecimal currentAmount,
        LocalDate createdAt
) {}