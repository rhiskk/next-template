import { type inferProcedureInput } from "@trpc/server";
import { type AppRouter, appRouter } from "../../root";

describe("skeleton", () => {
  const caller = appRouter.createCaller({});

  it("hello should return 'Hello world!' with input 'world!'", async () => {
    type Input = inferProcedureInput<AppRouter["skeleton"]["hello"]>;
    const input: Input = { text: "world!" };
    const result = await caller.skeleton.hello(input);
    expect(result).toEqual({ greeting: "Hello world!" });
  });

  it("hello should return 'Hello API' with input 'API'", async () => {
    type Input = inferProcedureInput<AppRouter["skeleton"]["hello"]>;
    const input: Input = { text: "API" };
    const result = await caller.skeleton.hello(input);
    expect(result).toEqual({ greeting: "Hello API" });
  });
});
