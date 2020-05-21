import Client from "./Client";

class Transaction {
  public income({ client, value }: { client: Client; value: number }): void {
    client.setBalance(client.getBalance() + value);
  }

  public outcome({ client, value }: { client: Client; value: number }): void {
    if (!this.validOutcomeTransaction({ client, value })) {
      console.log("invalid outcome");
      return;
    }

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
  }): void {
    if (!this.validOutcomeTransaction({ client: from, value })) {
      console.log("invalid outcome");
      return;
    }

    this.outcome({ client: from, value });
    this.income({ client: to, value });
  }

  private validOutcomeTransaction({
    client,
    value,
  }: {
    client: Client;
    value: number;
  }): boolean {
    return client.getBalance() >= value ? true : false;
  }
}

export default Transaction;
