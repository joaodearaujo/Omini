package joaodearaujo.omini.domain.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "goals")
public class Goal {

    @Id
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal currentAmount;

    @Column(nullable = false)
    private BigDecimal targetAmount;

    @Column(nullable = false)
    private LocalDate createdAt;

    public Goal() { }

    public Goal(String name, BigDecimal targetAmount) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.targetAmount = targetAmount;
        this.currentAmount = BigDecimal.ZERO;
        this.createdAt = LocalDate.now();
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public BigDecimal getCurrentAmount() { return currentAmount; }
    public BigDecimal getTargetAmount() { return targetAmount; }
    public LocalDate getCreatedAt() { return createdAt; }

    public void setName(String name) { this.name = name; }
    public void setCurrentAmount(BigDecimal currentAmount) { this.currentAmount = currentAmount; }
}