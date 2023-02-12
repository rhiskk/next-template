import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "../../../server/env.mjs";
import { createTRPCContext } from "../../../server/api/trpc";
import { appRouter } from "../../../server/api/root";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `tRPC error at ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
