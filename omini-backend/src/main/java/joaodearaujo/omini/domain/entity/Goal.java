package joaodearaujo.omini.domain.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public class Goal {
    private String id;
    private String name;
    private BigDecimal currentAmount;
    private BigDecimal targetAmount;
    private LocalDate createdAt;

    // JPA exige construtor vazio para instanciar via reflexão
    public Goal() { }

    public Goal(String name, BigDecimal targetAmount) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.targetAmount = targetAmount;
        this.currentAmount = BigDecimal.ZERO;
        this.createdAt = LocalDate.now();
    }

    public String getId () { return id; }
    public BigDecimal  getTargetAmount() { return targetAmount; }
    public LocalDate getCreatedAt() { return createdAt; }

    public String getName ()  { return name; }
    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getCurrentAmount() { return currentAmount; }
    public void setCurrentAmount(BigDecimal currentAmount) {
        this.currentAmount = currentAmount;
    }
}
