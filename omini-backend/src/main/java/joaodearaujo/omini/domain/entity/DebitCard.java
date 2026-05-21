package joaodearaujo.omini.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.List;

@Entity
@DiscriminatorValue("DEBIT")
public class DebitCard extends Card {

    @Column
    private BigDecimal balance;

    // JPA exige construtor vazio para instanciar via reflexão
    public DebitCard() {
        super();
    }

    public DebitCard(String ownerName, String number, YearMonth expirationDate, BigDecimal balance) {
        super(ownerName, number, expirationDate);
        this.balance = balance;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }
}
