import { rest } from "msw";

export const helloHandlers = [
  rest.get("/api/hello", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "John Doe",
      })
    );
  }),
];
