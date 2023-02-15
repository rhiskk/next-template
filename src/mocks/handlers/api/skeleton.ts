import { mswTrpc } from "../../mswTrpc";

export const skeletonHandlers = [
  /*
    msw-trpc has some problems with ctx typings apparently
  */
  mswTrpc.skeleton.hello.query((req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        greeting: `Hello TESTS`,
      })
    );
  }),
];
