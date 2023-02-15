import { createTRPCMsw } from "msw-trpc";
import { type AppRouter } from "../server/api/root";
import superjson from "superjson";

export const mswTrpc = createTRPCMsw<AppRouter>({
  transformer: { input: superjson, output: superjson },
});
