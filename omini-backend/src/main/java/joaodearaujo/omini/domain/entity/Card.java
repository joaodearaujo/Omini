package joaodearaujo.omini.domain.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "cards")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "card_type", discriminatorType = DiscriminatorType.STRING)
public abstract class Card {

    @Id
    private String id;

    @Column(nullable = false)
    private String ownerName;

    @Column(nullable = false, unique = true)
    private String number;

    @Column(nullable = false)
    private YearMonth expirationDate;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
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