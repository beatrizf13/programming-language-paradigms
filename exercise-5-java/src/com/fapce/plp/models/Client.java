package com.fapce.plp.models;

public class Client {

    private String name;
    private Double balance;

    public Client(String name) {
        this.name = name;
        this.balance = 0.0;
    }

    public String getName() {
        return name;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getBalance() {
        return balance;
    }

}
