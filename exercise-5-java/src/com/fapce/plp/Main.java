package com.fapce.plp;

import com.fapce.plp.models.Client;
import com.fapce.plp.models.Transaction;

public class Main {

    public static void main(String[] args) {

        Transaction transaction = new Transaction();

        System.out.println("\n--- Creating accounts");
        Client client1 = new Client("Pablo");
        Client client2 = new Client("Beatriz");

        logInfoClient(client1);
        logInfoClient(client2);

        System.out.println("\n--- Depositing money into accounts");
        transaction.income(client1, 10.50);
        transaction.income(client2, 8.75);

        logInfoClient(client1);
        logInfoClient(client2);

        System.out.println("\n--- INVALID Withdrawning money from accounts");
        transaction.outcome(client1, 110.35);
        transaction.outcome(client2, 200.20);

        logInfoClient(client1);
        logInfoClient(client2);

        System.out.println("\n--- Withdrawning money from accounts");
        transaction.outcome(client1, 8.35);
        transaction.outcome(client2, 4.20);

        logInfoClient(client1);
        logInfoClient(client2);

        System.out.println("\n--- INVALID Transferring money between accounts");
        transaction.transfer(3.80, client1, client2);

        logInfoClient(client1);
        logInfoClient(client2);

        System.out.println("\n--- Transferring money between accounts");
        transaction.transfer(1.10, client1, client2);

        logInfoClient(client1);
        logInfoClient(client2);
    }

    public static void logInfoClient(Client client) {
        System.out.println(client.getName() + "\n" + client.getBalance());
    }

}
