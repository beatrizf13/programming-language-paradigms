import Client from "./models/Client";
import Transaction from "./models/Transaction";

const transaction = new Transaction();

function logInfoClient(client: Client): void {
  const name = client.getName();
  const balance = client.getBalance();

  console.log({ name, balance });
}

const client1: Client = new Client("Beatriz");
const client2: Client = new Client("Pablo");

console.log("--- creating accounts");

logInfoClient(client1);
logInfoClient(client2);

console.log("--- depositing money into accounts");

transaction.income({ client: client1, value: 10 });
transaction.income({ client: client2, value: 8 });

logInfoClient(client1);
logInfoClient(client2);

console.log("--- withdrawing money from accounts");

transaction.outcome({ client: client1, value: 8 });
transaction.outcome({ client: client2, value: 4 });

logInfoClient(client1);
logInfoClient(client2);

console.log("--- transferring money from accounts");

transaction.transfer({
  value: 2,
  from: client1,
  to: client2,
});

logInfoClient(client1);
logInfoClient(client2);
