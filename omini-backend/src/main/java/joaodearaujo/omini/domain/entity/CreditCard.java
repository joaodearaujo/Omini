package joaodearaujo.omini.domain.entity;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.List;

public class CreditCard extends Card {
    private BigDecimal limit;
    private BigDecimal limitUsed;

    public CreditCard() {
        super();
    }

    public CreditCard(String ownerName, String number, YearMonth expirationDate, BigDecimal limit) {
        super(ownerName, number, expirationDate);
        this.limit = limit;
        this.limitUsed = BigDecimal.ZERO;
    }

    public BigDecimal getLimit() { return limit; }
    public void setLimit(BigDecimal limit) {
        this.limit = limit;
    }

    public BigDecimal getLimitUsed() { return limitUsed;}
    public void setLimitUsed(BigDecimal limitUsed) {
        this.limitUsed = limitUsed;
    }
}
