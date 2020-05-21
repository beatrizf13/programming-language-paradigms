package com.fapce.plp.models;

public class Transaction {

    public void income(Client client, Double value) {
        client.setBalance(client.getBalance() + value);
    }

    public void outcome(Client client, Double value) {
        if (validTransaction(client, value)) {
            client.setBalance(client.getBalance() - value);
        } else {
            System.out.println("Invalid outcome.");
        }
    }

    public void transfer(Double value, Client from, Client to) {
        if (validTransaction(from, value)) {
            this.outcome(from, value);
            this.income(to, value);
        } else {
            System.out.println("Invalid transfer.");
        }
    }

    private boolean validTransaction(Client client, Double value) {
        if (client.getBalance() >= value) {
            return true;
        } else {
            return false;
        }
    }

}
