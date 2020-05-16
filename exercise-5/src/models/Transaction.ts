import Client from "./Client";

class Transaction {
  public income({ client, value }: { client: Client; value: number }): void {
    client.setBalance(client.getBalance() + value);
  }

  public outcome({ client, value }: { client: Client; value: number }): void {
    client.setBalance(client.getBalance() - value);
  }

  public transfer({
    value,
    to,
    from,
  }: {
    value: number;
    to: Client;
    from: Client;
  }) {
    // TODO
  }
}

export default Transaction;
