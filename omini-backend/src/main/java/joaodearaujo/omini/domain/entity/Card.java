package joaodearaujo.omini.domain.entity;

import jakarta.persistence.Entity;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public abstract class Card {
    private String id;
    private String ownerName;
    private String number;
    private YearMonth expirationDate;
    private List<Transaction> transactions;

    // JPA exige construtor vazio para instanciar via reflexão
    public Card () { }

    public Card(String ownerName, String number, YearMonth expirationDate) {
        this.id = UUID.randomUUID().toString();
        this.ownerName = ownerName;
        this.number = number;
        this.expirationDate = expirationDate;
        this.transactions = new ArrayList<>();
    }

    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getNumber() { return number; }
    public void setNumber(String number) {
        this.number = number;
    }

    public YearMonth getExpirationDate() { return expirationDate; }
    public void setExpirationDate(YearMonth expirationDate) {
        this.expirationDate = expirationDate;
    }

    public List<Transaction> getTransactions() { return transactions; }

    public void addTransaction(Transaction transaction){
        this.transactions.add(transaction);
    }
}