class Client {
  private name: string;
  private balance: number;

  constructor(name: string) {
    this.balance = 0;
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setBalance(value: number): void {
    this.balance = value;
  }

  public getBalance(): number {
    // TODO
  }
}

export default Client;
