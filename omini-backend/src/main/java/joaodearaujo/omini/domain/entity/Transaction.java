package joaodearaujo.omini.domain.entity;

import joaodearaujo.omini.domain.enums.TransactionCategory;
import joaodearaujo.omini.domain.enums.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public class Transaction {
    private String id;
    private String receiver;
    private BigDecimal amount;
    private TransactionType type;
    private LocalDate date;
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

    public String getId() {
        return id;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public TransactionCategory getCategory() {
        return category;
    }

    public void setCategory(TransactionCategory category) {
        this.category = category;
    }
}
