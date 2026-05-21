package joaodearaujo.omini.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.List;

@Entity
@DiscriminatorValue("CREDIT")
public class CreditCard extends Card {

    @Column
    private BigDecimal limit;

    @Column
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
