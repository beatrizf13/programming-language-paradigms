import Client from "./models/Client";
import Transaction from "./models/Transaction";

const transaction = new Transaction();

function logInfoClient(client: Client): void {
  const name = client.getName();
  const balance = client.getBalance();

  console.log({ name, balance });
}

console.log("--- creating accounts");
const client1: Client = new Client("Beatriz");
const client2: Client = new Client("Pablo");
logInfoClient(client1);
logInfoClient(client2);

console.log("--- depositing money into accounts");
transaction.income({ client: client1, value: 10.5 });
transaction.income({ client: client2, value: 8.75 });
logInfoClient(client1);
logInfoClient(client2);

console.log("--- INVALID withdrawing money from accounts");
transaction.outcome({ client: client1, value: 110.35 });
transaction.outcome({ client: client2, value: 200.2 });
logInfoClient(client1);
logInfoClient(client2);

console.log("--- withdrawing money from accounts");
transaction.outcome({ client: client1, value: 8.35 });
transaction.outcome({ client: client2, value: 4.2 });

console.log("--- INVALID transferring money between accounts");
transaction.transfer({
  value: 3.80,
  from: client1,
  to: client2,
});

console.log("--- transferring money between accounts");
transaction.transfer({
  value: 1.1,
  from: client1,
  to: client2,
});

logInfoClient(client1);
logInfoClient(client2);
