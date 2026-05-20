package joaodearaujo.omini.domain.entity;

import java.math.BigDecimal;
import java.time.YearMonth;
import java.util.List;

public class DebitCard extends Card {
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
