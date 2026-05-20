package joaodearaujo.omini.domain.entity;

import jakarta.persistence.*;
import joaodearaujo.omini.domain.enums.TransactionCategory;
import joaodearaujo.omini.domain.enums.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "transactions")
public class Transaction {

    @ManyToOne
    @JoinColumn(name = "card_id", nullable = false)
    private Card card;

    @Id
    private String id;

    @Column(nullable = false)
    private String receiver;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TransactionType type;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TransactionCategory category;

    public Transaction() { }

    public Transaction(String receiver, BigDecimal amount, TransactionType type, TransactionCategory category) {
        this.id = UUID.randomUUID().toString();
        this.receiver = receiver;
        this.amount = amount;
        this.type = type;
        this.date = LocalDate.now();
        this.category = category;
    }

    public String getId() { return id; }
    public String getReceiver() { return receiver;}

    public void setReceiver(String receiver) { this.receiver = receiver; }
    public BigDecimal getAmount() { return amount; }

    public void setAmount(BigDecimal amount) { this.amount = amount; }
    public TransactionType getType() { return type; }

    public void setType(TransactionType type) { this.type = type; }
    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }
    public TransactionCategory getCategory() { return category; }

    public void setCategory(TransactionCategory category) { this.category = category; }

    public Card getCard() { return card; }
    public void setCard(Card card) { this.card = card; }
}
