import { pay } from "./index";

const apiKey = "";
const privateKey = "";
const appId = "";
const userId = "";

describe("test pay api client", () => {
  let client: pay;

  beforeAll(() => {
    client = new pay(apiKey, privateKey);
  });


  test("test list invoice", async () => {
    const reply = await client.Invoice.list(appId, {
      limit: 10,
    });
    console.log(reply);
  });

  test("test create invoice", async () => {
    const reply = await client.Invoice.create(appId, {
      amount: "1",
      channel: "ton_connect",
      currency: "USDT",
      userId: userId,
    });
    console.log(reply);
  });
});